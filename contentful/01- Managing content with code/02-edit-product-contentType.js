module.exports = function (migration) {

    const product = migration.editContentType("healthCondition");

    product.changeFieldControl("slug", "builtin", "slugEditor");

    product.editField("conditionIntroduction")
        .localized(true)
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

}