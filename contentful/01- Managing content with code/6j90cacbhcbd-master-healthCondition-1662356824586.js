// contentful space generate migration --space-id 6j90cacbhcbd --content-type-id healthCondition
module.exports = function (migration) {
    const healthCondition = migration
        .createContentType("healthCondition")
        .name("Health condition")
        .description("")
        .displayField("conditionName");
    healthCondition
        .createField("conditionName")
        .name("Condition name")
        .type("Symbol")
        .localized(true)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    healthCondition
        .createField("slug")
        .name("Slug")
        .type("Symbol")
        .localized(true)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    healthCondition
        .createField("conditionSummary")
        .name("Condition Summary")
        .type("Symbol")
        .localized(true)
        .required(true)
        .validations([
            {
                size: {
                    min: 20,
                    max: 165,
                },

                message: "The summary should be between 20 and 165 characters",
            },
        ])
        .disabled(false)
        .omitted(false);

    healthCondition
        .createField("conditionIntroduction")
        .name("Condition Introduction")
        .type("RichText")
        .localized(true)
        .required(true)
        .validations([
            {
                enabledNodeTypes: [
                    "heading-2",
                    "heading-3",
                    "heading-4",
                    "heading-5",
                    "heading-6",
                    "ordered-list",
                    "unordered-list",
                    "hr",
                    "blockquote",
                    "embedded-entry-block",
                    "embedded-asset-block",
                    "table",
                    "hyperlink",
                    "entry-hyperlink",
                    "asset-hyperlink",
                ],
            },
        ])
        .disabled(false)
        .omitted(false);

    healthCondition
        .createField("conditionSymptomsTitle")
        .name("Symptoms Title")
        .type("Symbol")
        .localized(true)
        .required(false)
        .validations([])
        .defaultValue({
            "en-US": "Symptoms",
        })
        .disabled(false)
        .omitted(false);

    healthCondition
        .createField("conditionSymptomsContent")
        .name("Symptoms Content")
        .type("RichText")
        .localized(true)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-2",
                    "heading-3",
                    "heading-4",
                    "heading-5",
                    "heading-6",
                    "ordered-list",
                    "unordered-list",
                    "hr",
                    "blockquote",
                    "embedded-entry-block",
                    "embedded-asset-block",
                    "table",
                    "hyperlink",
                    "entry-hyperlink",
                    "asset-hyperlink",
                    "embedded-entry-inline",
                ],

                message:
                    "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    healthCondition
        .createField("conditionCausesTitle")
        .name("Causes Title")
        .type("Symbol")
        .localized(true)
        .required(false)
        .validations([])
        .defaultValue({
            "en-US": "Causes",
        })
        .disabled(false)
        .omitted(false);

    healthCondition
        .createField("conditionCausesContent")
        .name("Causes Content")
        .type("RichText")
        .localized(true)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-2",
                    "heading-3",
                    "heading-4",
                    "heading-5",
                    "heading-6",
                    "ordered-list",
                    "unordered-list",
                    "hr",
                    "blockquote",
                    "embedded-entry-block",
                    "embedded-asset-block",
                    "table",
                    "hyperlink",
                    "entry-hyperlink",
                    "asset-hyperlink",
                    "embedded-entry-inline",
                ],

                message:
                    "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    healthCondition
        .createField("conditionDiagnosisTitle")
        .name("Diagnosis Title")
        .type("Symbol")
        .localized(true)
        .required(false)
        .validations([])
        .defaultValue({
            "en-US": "Diagnosis",
        })
        .disabled(false)
        .omitted(false);

    healthCondition
        .createField("conditionDiagnosisContent")
        .name("Diagnosis Content")
        .type("RichText")
        .localized(true)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-2",
                    "heading-3",
                    "heading-4",
                    "heading-5",
                    "heading-6",
                    "ordered-list",
                    "unordered-list",
                    "hr",
                    "blockquote",
                    "embedded-entry-block",
                    "embedded-asset-block",
                    "table",
                    "hyperlink",
                    "entry-hyperlink",
                    "asset-hyperlink",
                    "embedded-entry-inline",
                ],

                message:
                    "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    healthCondition
        .createField("conditionTreatmentAndPreventionTitle")
        .name("Treatment and Prevention Title")
        .type("Symbol")
        .localized(true)
        .required(false)
        .validations([])
        .defaultValue({
            "en-US": "Treatment and prevention",
        })
        .disabled(false)
        .omitted(false);

    healthCondition
        .createField("conditionTreatmentAndPreventionContent")
        .name("Treatment and Prevention Content")
        .type("RichText")
        .localized(true)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-2",
                    "heading-3",
                    "heading-4",
                    "heading-5",
                    "heading-6",
                    "ordered-list",
                    "unordered-list",
                    "hr",
                    "blockquote",
                    "embedded-entry-block",
                    "embedded-asset-block",
                    "table",
                    "hyperlink",
                    "entry-hyperlink",
                    "asset-hyperlink",
                    "embedded-entry-inline",
                ],

                message:
                    "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    healthCondition.changeFieldControl(
        "conditionName",
        "builtin",
        "singleLine",
        {}
    );
    healthCondition.changeFieldControl("slug", "builtin", "slugEditor", {});

    healthCondition.changeFieldControl(
        "conditionSummary",
        "builtin",
        "singleLine",
        {
            helpText:
                "This content will be shown on other pages to introduce the content of this one.",
        }
    );

    healthCondition.changeFieldControl(
        "conditionIntroduction",
        "builtin",
        "richTextEditor",
        {}
    );
    healthCondition.changeFieldControl(
        "conditionSymptomsTitle",
        "builtin",
        "singleLine",
        {}
    );
    healthCondition.changeFieldControl(
        "conditionSymptomsContent",
        "builtin",
        "richTextEditor",
        {}
    );
    healthCondition.changeFieldControl(
        "conditionCausesTitle",
        "builtin",
        "singleLine",
        {}
    );
    healthCondition.changeFieldControl(
        "conditionCausesContent",
        "builtin",
        "richTextEditor",
        {}
    );
    healthCondition.changeFieldControl(
        "conditionDiagnosisTitle",
        "builtin",
        "singleLine",
        {}
    );
    healthCondition.changeFieldControl(
        "conditionDiagnosisContent",
        "builtin",
        "richTextEditor",
        {}
    );
    healthCondition.changeFieldControl(
        "conditionTreatmentAndPreventionTitle",
        "builtin",
        "singleLine",
        {}
    );
    healthCondition.changeFieldControl(
        "conditionTreatmentAndPreventionContent",
        "builtin",
        "richTextEditor",
        {}
    );
};
