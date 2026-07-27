import { describe, expect, it } from "vitest";
import { domainSchemas, schemaRelationships } from "./domain-schema";

describe("Day 8 mock domain schema catalog", () => {
  it("covers every product domain exactly once", () => {
    expect(domainSchemas.map(({ code }) => code)).toEqual([
      "SIG", "ARC", "MAP", "PIC", "LND", "GME", "COM", "SNP", "UXS", "REV",
    ]);
    expect(new Set(domainSchemas.map(({ code }) => code)).size).toBe(10);
  });

  it("gives every table a primary key and resolves every foreign key", () => {
    const tableNames = new Set(domainSchemas.flatMap(({ tables }) => tables.map(({ name }) => name)));
    for (const domain of domainSchemas) {
      for (const table of domain.tables) {
        expect(table.fields.some(({ key }) => key === "PK")).toBe(true);
        for (const field of table.fields) {
          if (field.references) expect(tableNames.has(field.references.split(".")[0])).toBe(true);
        }
      }
    }
  });

  it("keeps private Steam, live social, analytics, and billing data out", () => {
    const serialized = JSON.stringify(domainSchemas);
    expect(serialized).not.toMatch(
      /steam_?url|steam_?id|cookie|api_?key|password|email|member_?count|online_?count|follower_?count|payment|card_?number|tracking_?event/i,
    );
  });

  it("keeps the executable persistence slice fixture-only and traceable", () => {
    const coreTables = domainSchemas
      .filter(({ status }) => status === "core")
      .flatMap(({ tables }) => tables);
    expect(coreTables.some(({ name }) => name === "selection_sessions")).toBe(true);

    const recommendations = domainSchemas
      .flatMap(({ tables }) => tables)
      .find(({ name }) => name === "recommendations");
    expect(recommendations?.fields.some(({ name }) => name === "signal_refs")).toBe(true);
    expect(recommendations?.constraints.join(" ")).toMatch(/three|3개/i);
  });

  it("keeps the landing ERD relationships backed by known tables", () => {
    const tableNames = new Set(domainSchemas.flatMap(({ tables }) => tables.map(({ name }) => name)));
    expect(schemaRelationships).toHaveLength(6);
    for (const relationship of schemaRelationships) {
      expect(tableNames.has(relationship.from)).toBe(true);
      expect(tableNames.has(relationship.to)).toBe(true);
    }
    expect(schemaRelationships).toContainEqual({
      from: "recommendations",
      to: "selection_sessions",
      label: "1 : 0..1",
      kind: "core",
    });
  });
});
