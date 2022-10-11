// contentful space generate migration --space-id 6j90cacbhcbd

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
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    healthCondition
        .createField("slug")
        .name("Slug")
        .type("Symbol")
        .localized(false)
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
        .localized(false)
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
        .localized(false)
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
        .localized(false)
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
        .localized(false)
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
        .localized(false)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
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
        .localized(false)
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
        .localized(false)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
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
    const productListing = migration
        .createContentType("productListing")
        .name("Product Listing")
        .description("")
        .displayField("internalName");
    productListing
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    productListing
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    productListing
        .createField("subTitle")
        .name("Sub-Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    productListing
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    productListing
        .createField("heroImage")
        .name("Hero Image")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    productListing
        .createField("ctas")
        .name("CTAs")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["cta"],
                },
            ],

            linkType: "Entry",
        });

    productListing
        .createField("productCategory")
        .name("Product Category")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["productCategory"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    productListing
        .createField("additionalInformation")
        .name("Additional Information")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["additionalInformation"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    productListing
        .createField("seo")
        .name("SEO")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["seo"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    productListing
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tag"],
                },
            ],

            linkType: "Entry",
        });

    productListing.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    productListing.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    productListing.changeFieldControl("subTitle", "builtin", "singleLine", {
        helpText: "Used as secondary text within the page",
    });

    productListing.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the page",
    });

    productListing.changeFieldControl("heroImage", "builtin", "entryLinkEditor", {
        helpText: "The primary image on the page",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    productListing.changeFieldControl("ctas", "builtin", "entryLinksEditor", {
        helpText:
            "Used to support display of  a link to an offer or any other type of content.",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    productListing.changeFieldControl(
        "productCategory",
        "builtin",
        "entryLinkEditor",
        {
            helpText: "Reference to Product Category",
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    productListing.changeFieldControl(
        "additionalInformation",
        "builtin",
        "entryLinkEditor",
        {
            helpText: "Links to Additional information content type",
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    productListing.changeFieldControl("seo", "builtin", "entryLinkEditor", {
        helpText: "reference to page specific SEO",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    productListing.changeFieldControl("tags", "builtin", "entryLinksEditor", {
        helpText: "Used to group similar elements for search",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const productCategory = migration
        .createContentType("productCategory")
        .name("Product Category")
        .description("")
        .displayField("internalName");
    productCategory
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    productCategory
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    productCategory
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    productCategory
        .createField("pimId")
        .name("PIM ID")
        .type("Integer")
        .localized(false)
        .required(true)
        .validations([
            {
                unique: true,
            },
        ])
        .disabled(false)
        .omitted(false);

    productCategory
        .createField("merchandiseTiles")
        .name("Merchandise Tiles")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["productCategoryMerchandiseTiles"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    productCategory
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tag"],
                },
            ],

            linkType: "Entry",
        });

    productCategory.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    productCategory.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    productCategory.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the page",
    });

    productCategory.changeFieldControl("pimId", "builtin", "numberEditor", {
        helpText:
            "An Algolia-known unique product category identifier which the implementation is expected to include in integration requests to Aloglia to retrieve a list of products belonging to that product category identifier. ",
    });

    productCategory.changeFieldControl(
        "merchandiseTiles",
        "builtin",
        "entryLinkEditor",
        {
            helpText:
                "A set of merchandise tiles (including offers) to include within the product category listing.",
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    productCategory.changeFieldControl("tags", "builtin", "entryLinksEditor", {
        helpText: "Used to group similar elements for search",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const productCategoryMerchandiseTiles = migration
        .createContentType("productCategoryMerchandiseTiles")
        .name("Product Category Merchandise Tiles")
        .description("");

    productCategoryMerchandiseTiles
        .createField("merchandiseTiles")
        .name("Merchandise Tiles")
        .type("Array")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["merchandiseTile"],
                },
            ],

            linkType: "Entry",
        });

    productCategoryMerchandiseTiles
        .createField("displayInterval")
        .name("Display Interval")
        .type("Integer")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    productCategoryMerchandiseTiles.changeFieldControl(
        "merchandiseTiles",
        "builtin",
        "entryLinksEditor",
        {
            helpText:
                "The list of merchandise tiles to display. There are different ways Merchandise Tiles for use within a particular product category listing. Authors could explicit select them; Tags used on Product Category could be used to dynamically retrieve Merchandise",
            bulkEditing: false,
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    productCategoryMerchandiseTiles.changeFieldControl(
        "displayInterval",
        "builtin",
        "numberEditor",
        {
            helpText:
                "The number of products (shown as part of Product Category) to display between merchandise tiles.",
        }
    );

    const merchandiseTile = migration
        .createContentType("merchandiseTile")
        .name("Merchandise Tile")
        .description("");

    merchandiseTile
        .createField("details")
        .name("Details")
        .type("Link")
        .localized(false)
        .required(true)
        .validations([
            {
                linkContentType: ["cta"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    merchandiseTile.changeFieldControl("details", "builtin", "entryLinkEditor", {
        helpText:
            "Merchandise Tile takes on the CTA content type. Tags can be used to control which offers and product merchandising tiles are pulled into a product listings container.",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const faqContainer = migration
        .createContentType("faqContainer")
        .name("FAQ Container")
        .description("")
        .displayField("internalName");
    faqContainer
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    faqContainer
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    faqContainer
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    faqContainer
        .createField("faqs")
        .name("FAQs")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["faq"],
                },
            ],

            linkType: "Entry",
        });

    faqContainer.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    faqContainer.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    faqContainer.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the FAQ container",
    });

    faqContainer.changeFieldControl("faqs", "builtin", "entryLinksEditor", {
        helpText: "Reference to individual FAQ's",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const faq = migration
        .createContentType("faq")
        .name("FAQ")
        .description("")
        .displayField("internalName");
    faq
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    faq
        .createField("question")
        .name("Question")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    faq
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(true);

    faq
        .createField("answer")
        .name("Answer")
        .type("RichText")
        .localized(false)
        .required(true)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {
                    "embedded-entry-block": [
                        {
                            linkContentType: ["asset"],
                            message: null,
                        },
                    ],

                    "embedded-entry-inline": [
                        {
                            linkContentType: ["asset"],
                            message: null,
                        },
                    ],
                },
            },
        ])
        .disabled(false)
        .omitted(false);

    faq
        .createField("image")
        .name("Image")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    faq
        .createField("video")
        .name("Video")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["video"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    faq
        .createField("ctas")
        .name("CTAs")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["cta"],
                },
            ],

            linkType: "Entry",
        });

    faq
        .createField("seo")
        .name("SEO")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["seo"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    faq
        .createField("faqTopics")
        .name("FAQ Topics")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["faqTopic"],
                },
            ],

            linkType: "Entry",
        });

    faq.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    faq.changeFieldControl("question", "builtin", "singleLine", {
        helpText: "Short text question",
    });

    faq.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the page",
    });

    faq.changeFieldControl("answer", "builtin", "richTextEditor", {
        helpText:
            "Rich text answer, which can embed inline images and video when additional assets are needed beyond the fixed Image and Video attributes.",
    });

    faq.changeFieldControl("image", "builtin", "entryLinkEditor", {
        helpText: "If the answer requires an image",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    faq.changeFieldControl("video", "builtin", "entryLinkEditor", {
        helpText: "If the answer requires an video",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    faq.changeFieldControl("ctas", "builtin", "entryLinksEditor", {
        helpText: "Links to various Call to Action",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    faq.changeFieldControl("seo", "builtin", "entryLinkEditor", {
        helpText: "reference to page specific SEO",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    faq.changeFieldControl("faqTopics", "builtin", "entryLinksEditor", {
        helpText: "Reference to various topics related to the FAQ",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const faqTopic = migration
        .createContentType("faqTopic")
        .name("FAQ Topic")
        .description("")
        .displayField("internalName");
    faqTopic
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    faqTopic
        .createField("topic")
        .name("Topic")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    faqTopic
        .createField("subTopic")
        .name("Sub-Topic")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["faqTopic"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    faqTopic.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    faqTopic.changeFieldControl("topic", "builtin", "singleLine", {
        helpText: "Name of the topic",
    });

    faqTopic.changeFieldControl("subTopic", "builtin", "entryLinkEditor", {});
    const service = migration
        .createContentType("service")
        .name("Service")
        .description("")
        .displayField("internalName");
    service
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    service
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    service
        .createField("subTitle")
        .name("Sub-Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    service
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    service
        .createField("heroImage")
        .name("Hero Image")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    service
        .createField("serviceSection")
        .name("Service Section")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["serviceSection"],
                },
            ],

            linkType: "Entry",
        });

    service
        .createField("termsAndConditions")
        .name("Terms and Conditions")
        .type("RichText")
        .localized(false)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    service
        .createField("additionalInformation")
        .name("Additional Information")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["additionalInformation"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    service
        .createField("seo")
        .name("SEO")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["seo"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    service
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tag"],
                },
            ],

            linkType: "Entry",
        });

    service.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    service.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    service.changeFieldControl("subTitle", "builtin", "singleLine", {
        helpText: "Used as secondary text within the page",
    });

    service.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the page",
    });

    service.changeFieldControl("heroImage", "builtin", "entryLinkEditor", {
        helpText: "The primary image on the page",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    service.changeFieldControl("serviceSection", "builtin", "entryLinksEditor", {
        helpText: "Reference to individual sections",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    service.changeFieldControl(
        "termsAndConditions",
        "builtin",
        "richTextEditor",
        {
            helpText: "Free text field for T&C",
        }
    );

    service.changeFieldControl(
        "additionalInformation",
        "builtin",
        "entryLinkEditor",
        {
            helpText: "Links to Additional information content type",
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    service.changeFieldControl("seo", "builtin", "entryLinkEditor", {
        helpText: "reference to page specific SEO",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    service.changeFieldControl("tags", "builtin", "entryLinksEditor", {
        helpText: "Used to group similar elements for search",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const serviceSection = migration
        .createContentType("serviceSection")
        .name("Service Section")
        .description("")
        .displayField("internalName");
    serviceSection
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    serviceSection
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    serviceSection
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    serviceSection
        .createField("asset")
        .name("Asset")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    serviceSection
        .createField("body")
        .name("Body")
        .type("RichText")
        .localized(false)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {
                    "embedded-entry-block": [
                        {
                            linkContentType: ["asset", "cta", "serviceSection", "video"],
                            message: null,
                        },
                    ],

                    "embedded-entry-inline": [
                        {
                            linkContentType: ["asset", "cta", "serviceSection", "video"],
                            message: null,
                        },
                    ],
                },
            },
        ])
        .disabled(false)
        .omitted(false);

    serviceSection
        .createField("cta")
        .name("CTA")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["cta"],
                },
            ],

            linkType: "Entry",
        });

    serviceSection.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    serviceSection.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    serviceSection.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the page",
    });

    serviceSection.changeFieldControl("asset", "builtin", "entryLinkEditor", {
        helpText: "Reference an image of required",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    serviceSection.changeFieldControl("body", "builtin", "richTextEditor", {
        helpText: "Various content types for the body of the section",
    });

    serviceSection.changeFieldControl("cta", "builtin", "entryLinksEditor", {
        helpText: "Links to various Call to Action",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const resourceContainer = migration
        .createContentType("resourceContainer")
        .name("Resource Container")
        .description("")
        .displayField("internalName");
    resourceContainer
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    resourceContainer
        .createField("resourceItems")
        .name("Resource Items")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["resourceItem"],
                },
            ],

            linkType: "Entry",
        });

    resourceContainer
        .createField("ctas")
        .name("CTAs")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["cta"],
                },
            ],

            linkType: "Entry",
        });

    resourceContainer.changeFieldControl(
        "internalName",
        "builtin",
        "singleLine",
        {
            helpText: "Used by Authors and Developers to search for existing content",
        }
    );

    resourceContainer.changeFieldControl(
        "resourceItems",
        "builtin",
        "entryLinksEditor",
        {
            helpText:
                "For scenarios where a single UI component/ widget has a requirement for more than one element of it to be content authorable (e.g. labels for more than one button; tip text that for input boxes, etc.), Resource Container can be used to logically group",
            bulkEditing: false,
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    resourceContainer.changeFieldControl("ctas", "builtin", "entryLinksEditor", {
        helpText: "Links to various Call to Action",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const resourceItem = migration
        .createContentType("resourceItem")
        .name("Resource Item")
        .description("")
        .displayField("internalName");
    resourceItem
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    resourceItem
        .createField("key")
        .name("Key")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    resourceItem
        .createField("value")
        .name("Value")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    resourceItem
        .createField("asset")
        .name("Asset")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    resourceItem.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    resourceItem.changeFieldControl("key", "builtin", "singleLine", {
        helpText:
            "Key is used by the UI component front-end code as a means to retrieving a resource item for a specific element of a UI component/ widget so that its content/ asset can be rendered as part of the UI component.",
    });

    resourceItem.changeFieldControl("value", "builtin", "markdown", {
        helpText:
            "The text content that is to be displayed on the element of a UI component/ widget.",
    });

    resourceItem.changeFieldControl("asset", "builtin", "entryLinkEditor", {
        helpText:
            "The asset that is to be displayed on the element of the a UI component/ widget.",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const navigation = migration
        .createContentType("navigation")
        .name("Navigation")
        .description("")
        .displayField("internalName");
    navigation
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    navigation
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    navigation
        .createField("navigationItem")
        .name("Navigation Item")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["navigationItem"],
                },
            ],

            linkType: "Entry",
        });

    navigation
        .createField("cta")
        .name("CTA")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["cta"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    navigation.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    navigation.changeFieldControl("name", "builtin", "singleLine", {
        helpText: "Title of the navigation link item",
    });

    navigation.changeFieldControl(
        "navigationItem",
        "builtin",
        "entryLinksEditor",
        {
            helpText: "Reference to navigation items",
            bulkEditing: false,
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    navigation.changeFieldControl("cta", "builtin", "entryLinkEditor", {
        helpText: "Additional call to action within navigation",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const navigationItem = migration
        .createContentType("navigationItem")
        .name("Navigation Item")
        .description("")
        .displayField("internalName");
    navigationItem
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    navigationItem
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    navigationItem
        .createField("navigationItem")
        .name("Navigation Item")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["navigationItem"],
                },
            ],

            linkType: "Entry",
        });

    navigationItem
        .createField("navigationLink")
        .name("Navigation Link")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["cta"],
                },
            ],

            linkType: "Entry",
        });

    navigationItem.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    navigationItem.changeFieldControl("name", "builtin", "singleLine", {
        helpText: "Title of the navigation link item",
    });

    navigationItem.changeFieldControl(
        "navigationItem",
        "builtin",
        "entryLinksEditor",
        {
            helpText: "Use if multiple levels of navigation are required",
            bulkEditing: false,
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    navigationItem.changeFieldControl(
        "navigationLink",
        "builtin",
        "entryLinksEditor",
        {
            helpText: "Additional call to action within navigation",
            bulkEditing: false,
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    const home = migration
        .createContentType("home")
        .name("Home")
        .description("")
        .displayField("internalName");
    home
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    home
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    home
        .createField("subTitle")
        .name("Sub-Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    home
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    home
        .createField("heroImage")
        .name("Hero Image")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    home
        .createField("ctas")
        .name("CTAs")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["cta"],
                },
            ],

            linkType: "Entry",
        });

    home
        .createField("homeSection")
        .name("Home Section")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["homeSection"],
                },
            ],

            linkType: "Entry",
        });

    home
        .createField("carousel")
        .name("Carousel")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["carousel"],
                },
            ],

            linkType: "Entry",
        });

    home
        .createField("additionalInformation")
        .name("Additional Information")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["additionalInformation"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    home
        .createField("seo")
        .name("SEO")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["seo"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    home
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tag"],
                },
            ],

            linkType: "Entry",
        });

    home.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    home.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the heading for the display layer",
    });

    home.changeFieldControl("subTitle", "builtin", "singleLine", {
        helpText: "Used as secondary text within the display layer",
    });

    home.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Use as in introductory paragraph for the display layer",
    });

    home.changeFieldControl("heroImage", "builtin", "entryLinkEditor", {
        helpText: "An image for the Hero Banner",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    home.changeFieldControl("ctas", "builtin", "entryLinksEditor", {
        helpText: "Links to various Call to Action",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    home.changeFieldControl("homeSection", "builtin", "entryLinksEditor", {
        helpText: "Links to additional sections",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    home.changeFieldControl("carousel", "builtin", "entryLinksEditor", {
        helpText: "Reference to various carousels",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    home.changeFieldControl(
        "additionalInformation",
        "builtin",
        "entryLinkEditor",
        {
            helpText: "Links to Additional information content type",
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    home.changeFieldControl("seo", "builtin", "entryLinkEditor", {
        helpText: "reference to page specific SEO",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    home.changeFieldControl("tags", "builtin", "entryLinksEditor", {
        helpText: "Used to group similar elements for search",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const homeSection = migration
        .createContentType("homeSection")
        .name("Home Section")
        .description("")
        .displayField("internalName");
    homeSection
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    homeSection
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    homeSection
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    homeSection
        .createField("body")
        .name("Body")
        .type("RichText")
        .localized(false)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {
                    "embedded-entry-block": [
                        {
                            linkContentType: [
                                "cta",
                                "homeSection",
                                "productCategory",
                                "resourceContainer",
                                "resourceItem",
                            ],

                            message: null,
                        },
                    ],

                    "embedded-entry-inline": [
                        {
                            linkContentType: [
                                "cta",
                                "homeSection",
                                "productCategory",
                                "resourceContainer",
                                "resourceItem",
                            ],

                            message: null,
                        },
                    ],
                },
            },
        ])
        .disabled(false)
        .omitted(false);

    homeSection
        .createField("ctas")
        .name("CTAs")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["cta"],
                },
            ],

            linkType: "Entry",
        });

    homeSection.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    homeSection.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    homeSection.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the page",
    });

    homeSection.changeFieldControl("body", "builtin", "richTextEditor", {
        helpText: "Links to additional Content for the page",
    });

    homeSection.changeFieldControl("ctas", "builtin", "entryLinksEditor", {
        helpText: "Links to various Call to Action",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const emptyBasket = migration
        .createContentType("emptyBasket")
        .name("Empty Basket")
        .description("")
        .displayField("internalName");
    emptyBasket
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    emptyBasket
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    emptyBasket
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    emptyBasket
        .createField("asset")
        .name("Asset")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    emptyBasket
        .createField("additionalInformation")
        .name("Additional Information")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["additionalInformation"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    emptyBasket.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    emptyBasket.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "This is the message indicating the basket is empty",
    });

    emptyBasket.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the page",
    });

    emptyBasket.changeFieldControl("asset", "builtin", "entryLinkEditor", {
        helpText: "Used if image is required",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    emptyBasket.changeFieldControl(
        "additionalInformation",
        "builtin",
        "entryLinkEditor",
        {
            helpText: "Links to Additional information content type",
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    const corporate = migration
        .createContentType("corporate")
        .name("Corporate")
        .description("")
        .displayField("internalName");
    corporate
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    corporate
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    corporate
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    corporate
        .createField("subTitle")
        .name("Sub-Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    corporate
        .createField("heroImage")
        .name("Hero Image")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    corporate
        .createField("corporateSection")
        .name("Corporate Section")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["corporateSection"],
                },
            ],

            linkType: "Entry",
        });

    corporate
        .createField("cta")
        .name("CTA")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["cta"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    corporate
        .createField("references")
        .name("References")
        .type("RichText")
        .localized(false)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    corporate
        .createField("additionalInformation")
        .name("Additional Information")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["additionalInformation"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    corporate
        .createField("seo")
        .name("SEO")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["seo"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    corporate
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tag"],
                },
            ],

            linkType: "Entry",
        });

    corporate.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    corporate.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    corporate.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the page",
    });

    corporate.changeFieldControl("subTitle", "builtin", "singleLine", {
        helpText:
            "Used as secondary text within the page; usually on the Hero Banner",
    });

    corporate.changeFieldControl("heroImage", "builtin", "entryLinkEditor", {
        helpText: "The primary image on the page",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    corporate.changeFieldControl(
        "corporateSection",
        "builtin",
        "entryLinksEditor",
        {
            helpText: "Reference to Corporate section content type",
            bulkEditing: false,
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    corporate.changeFieldControl("cta", "builtin", "entryLinkEditor", {
        helpText: "Links to various Call to Action",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    corporate.changeFieldControl("references", "builtin", "richTextEditor", {
        helpText: "Additional reference information relating to the content",
    });

    corporate.changeFieldControl(
        "additionalInformation",
        "builtin",
        "entryLinkEditor",
        {
            helpText: "Links to Additional information content type",
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    corporate.changeFieldControl("seo", "builtin", "entryLinkEditor", {
        helpText: "reference to page specific SEO",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    corporate.changeFieldControl("tags", "builtin", "entryLinksEditor", {
        helpText: "Used to group similar elements for search",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const corporateSection = migration
        .createContentType("corporateSection")
        .name("Corporate Section")
        .description("")
        .displayField("internalName");
    corporateSection
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    corporateSection
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    corporateSection
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    corporateSection
        .createField("body")
        .name("Body")
        .type("RichText")
        .localized(false)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {
                    "embedded-entry-block": [
                        {
                            linkContentType: [
                                "asset",
                                "banner",
                                "corporateSection",
                                "cta",
                                "quotation",
                            ],
                            message: null,
                        },
                    ],

                    "embedded-entry-inline": [
                        {
                            linkContentType: [
                                "asset",
                                "banner",
                                "corporateSection",
                                "cta",
                                "quotation",
                            ],
                            message: null,
                        },
                    ],
                },
            },
        ])
        .disabled(false)
        .omitted(false);

    corporateSection
        .createField("cta")
        .name("CTA")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["cta"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    corporateSection.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    corporateSection.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    corporateSection.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the page",
    });

    corporateSection.changeFieldControl("body", "builtin", "richTextEditor", {
        helpText: "Additional information for the container",
    });

    corporateSection.changeFieldControl("cta", "builtin", "entryLinkEditor", {
        helpText: "Links to various Call to Action",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const legalContainer = migration
        .createContentType("legalContainer")
        .name("Legal Container")
        .description("")
        .displayField("internalName");
    legalContainer
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    legalContainer
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    legalContainer
        .createField("legal")
        .name("Legal")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["legal"],
                },
            ],

            linkType: "Entry",
        });

    legalContainer
        .createField("asset")
        .name("Asset")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    legalContainer
        .createField("seo")
        .name("SEO")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["seo"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    legalContainer.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    legalContainer.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    legalContainer.changeFieldControl("legal", "builtin", "entryLinksEditor", {
        helpText: "Used to add multiple legal content types",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    legalContainer.changeFieldControl("asset", "builtin", "entryLinkEditor", {});

    legalContainer.changeFieldControl("seo", "builtin", "entryLinkEditor", {
        helpText: "Reference to page specific SEO",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const legal = migration
        .createContentType("legal")
        .name("Legal")
        .description("")
        .displayField("internalName");
    legal
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    legal
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    legal
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    legal
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tag"],
                },
            ],

            linkType: "Entry",
        });

    legal.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    legal.changeFieldControl("name", "builtin", "singleLine", {
        helpText: "Heading",
    });

    legal.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Content",
    });

    legal.changeFieldControl("tags", "builtin", "entryLinksEditor", {
        helpText: "Used to group similar elements for search",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const brandContainer = migration
        .createContentType("brandContainer")
        .name("Brand Container")
        .description("")
        .displayField("internalName");
    brandContainer
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    brandContainer
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    brandContainer
        .createField("brands")
        .name("Brands")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["brand"],
                },
            ],

            linkType: "Entry",
        });

    brandContainer.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    brandContainer.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Heading for the container",
    });

    brandContainer.changeFieldControl("brands", "builtin", "entryLinksEditor", {
        helpText: "Links to Brand content",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const brandListing = migration
        .createContentType("brandListing")
        .name("Brand Listing")
        .description("")
        .displayField("internalName");
    brandListing
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    brandListing
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    brandListing
        .createField("subTitle")
        .name("Sub-Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    brandListing
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    brandListing
        .createField("heroImage")
        .name("Hero Image")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    brandListing
        .createField("category")
        .name("Category")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["brandCategory"],
                },
            ],

            linkType: "Entry",
        });

    brandListing
        .createField("brands")
        .name("Brands")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",
            validations: [],
            linkType: "Entry",
        });

    brandListing
        .createField("additionalInformation")
        .name("Additional Information")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["additionalInformation"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    brandListing
        .createField("seo")
        .name("SEO")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["seo"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    brandListing
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tag"],
                },
            ],

            linkType: "Entry",
        });

    brandListing.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Category of the brand. E.g. Mens; womens, Popular",
    });

    brandListing.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    brandListing.changeFieldControl("subTitle", "builtin", "singleLine", {
        helpText: "Used as secondary text within the page",
    });

    brandListing.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Use as in introductory paragraph for the page; below the Hero",
    });

    brandListing.changeFieldControl("heroImage", "builtin", "entryLinkEditor", {
        helpText: "The primary image on the page",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    brandListing.changeFieldControl("category", "builtin", "entryLinksEditor", {
        helpText: "References the pre-set category",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    brandListing.changeFieldControl("brands", "builtin", "entryLinksEditor", {
        helpText: "Contains individual Brand items",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    brandListing.changeFieldControl(
        "additionalInformation",
        "builtin",
        "entryLinkEditor",
        {
            helpText: "Links to Additional information content type",
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    brandListing.changeFieldControl("seo", "builtin", "entryLinkEditor", {
        helpText: "reference to page specific SEO",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    brandListing.changeFieldControl("tags", "builtin", "entryLinksEditor", {
        helpText: "Used to group similar elements for search",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const brandCategory = migration
        .createContentType("brandCategory")
        .name("Brand Category")
        .description("")
        .displayField("internalName");
    brandCategory
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    brandCategory
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    brandCategory.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    brandCategory.changeFieldControl("name", "builtin", "singleLine", {
        helpText: "Category of the brand. E.g. Mens; womens, Popular",
    });

    const video = migration
        .createContentType("video")
        .name("Video")
        .description("")
        .displayField("internalName");
    video
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    video
        .createField("type")
        .name("Type")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    video
        .createField("youTubeVideoId")
        .name("YouTube Video ID")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    video
        .createField("video")
        .name("Video")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    video
        .createField("thumbnail")
        .name("Thumbnail")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    video
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tag"],
                },
            ],

            linkType: "Entry",
        });

    video.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    video.changeFieldControl("type", "builtin", "singleLine", {
        helpText: "Type identifies either YouTube or self-hosted video",
    });

    video.changeFieldControl("youTubeVideoId", "builtin", "singleLine", {
        helpText: "Used for YouTube videos",
    });

    video.changeFieldControl("video", "builtin", "entryLinkEditor", {
        helpText: "Used for Internal videos",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    video.changeFieldControl("thumbnail", "builtin", "entryLinkEditor", {
        helpText: "Image for internal videos",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    video.changeFieldControl("tags", "builtin", "entryLinksEditor", {
        helpText: "Used to add multiple legal content types",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const seo = migration
        .createContentType("seo")
        .name("SEO")
        .description("")
        .displayField("internalName");
    seo
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    seo
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    seo
        .createField("ogTitle")
        .name("OG Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    seo
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    seo
        .createField("ogDescription")
        .name("OG Description")
        .type("Text")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    seo
        .createField("ogUrl")
        .name("OG URL")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    seo
        .createField("ogImage")
        .name("OG Image")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    seo
        .createField("doNotIndex")
        .name("Do not index")
        .type("Boolean")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    seo
        .createField("doNotFollow")
        .name("Do not follow")
        .type("Boolean")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    seo.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    seo.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "The title of your page.",
    });

    seo.changeFieldControl("ogTitle", "builtin", "singleLine", {
        helpText: "The title of your page.",
    });

    seo.changeFieldControl("description", "builtin", "markdown", {
        helpText: "A brief description of the content.",
    });

    seo.changeFieldControl("ogDescription", "builtin", "markdown", {
        helpText: "A brief description of the content. ",
    });

    seo.changeFieldControl("ogUrl", "builtin", "entryLinkEditor", {
        helpText: "The URL of the content.",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    seo.changeFieldControl("ogImage", "builtin", "entryLinkEditor", {
        helpText: "The URL of an image for the social snippet. ",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    seo.changeFieldControl("doNotIndex", "builtin", "boolean", {
        helpText:
            "When set to true, prevents content from being indexed by search engines.",
        trueLabel: "Yes",
        falseLabel: "No",
    });

    seo.changeFieldControl("doNotFollow", "builtin", "boolean", {
        helpText:
            "When set to true, prevents content from being ranked by search engines.",
        trueLabel: "Yes",
        falseLabel: "No",
    });

    const seoSitewide = migration
        .createContentType("seoSitewide")
        .name("SEO Sitewide")
        .description("")
        .displayField("internalName");
    seoSitewide
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    seoSitewide
        .createField("ogSiteName")
        .name("OG Site Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    seoSitewide
        .createField("ogType")
        .name("OG Type")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    seoSitewide
        .createField("fbAppId")
        .name("fb app_id")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    seoSitewide
        .createField("facebookDomainVerification")
        .name("facebook-domain-verification")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    seoSitewide
        .createField("twittersite")
        .name("twitter:site")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    seoSitewide
        .createField("twittercard")
        .name("twitter:card")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    seoSitewide
        .createField("ogLocale")
        .name("OG Locale")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    seoSitewide.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    seoSitewide.changeFieldControl("ogSiteName", "builtin", "singleLine", {
        helpText: "Name  of the Website",
    });

    seoSitewide.changeFieldControl("ogType", "builtin", "singleLine", {
        helpText:
            "The type of object you’re sharing. (e.g., article, website, etc.)",
    });

    seoSitewide.changeFieldControl("fbAppId", "builtin", "singleLine", {
        helpText: "The Facebook Short URL",
    });

    seoSitewide.changeFieldControl(
        "facebookDomainVerification",
        "builtin",
        "singleLine",
        {
            helpText: "The Facebook verification code used",
        }
    );

    seoSitewide.changeFieldControl("twittersite", "builtin", "singleLine", {
        helpText: "Twitter handle",
    });

    seoSitewide.changeFieldControl("twittercard", "builtin", "singleLine", {
        helpText: "Defines the card to display when sharing content",
    });

    seoSitewide.changeFieldControl("ogLocale", "builtin", "singleLine", {
        helpText: "Defines the content language.",
    });

    const tag = migration
        .createContentType("tag")
        .name("Tag")
        .description("")
        .displayField("internalName");
    tag
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    tag
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    tag
        .createField("category")
        .name("Category")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["tagCategory"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    tag.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    tag.changeFieldControl("name", "builtin", "singleLine", {
        helpText: "Name of the Tag",
    });

    tag.changeFieldControl("category", "builtin", "entryLinkEditor", {
        helpText: "Reference to the category",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const tagCategory = migration
        .createContentType("tagCategory")
        .name("Tag Category")
        .description("")
        .displayField("internalName");
    tagCategory
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    tagCategory
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    tagCategory
        .createField("subTagCategory")
        .name("Sub Tag Category")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tagCategory"],
                },
            ],

            linkType: "Entry",
        });

    tagCategory.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    tagCategory.changeFieldControl("name", "builtin", "singleLine", {
        helpText: "Name of the Tag",
    });

    tagCategory.changeFieldControl(
        "subTagCategory",
        "builtin",
        "entryLinksEditor",
        {}
    );
    const articleListing = migration
        .createContentType("articleListing")
        .name("Article Listing")
        .description("")
        .displayField("internalName");
    articleListing
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    articleListing
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    articleListing
        .createField("subTitle")
        .name("Sub-Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    articleListing
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    articleListing
        .createField("heroImage")
        .name("Hero Image")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    articleListing
        .createField("categories")
        .name("Categories")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["articleCategory"],
                },
            ],

            linkType: "Entry",
        });

    articleListing
        .createField("carousel")
        .name("Carousel")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["carousel"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    articleListing
        .createField("cta")
        .name("CTAs")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["cta"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    articleListing
        .createField("additionalInformation")
        .name("Additional Information")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["additionalInformation"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    articleListing
        .createField("seo")
        .name("SEO")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["seo"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    articleListing
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tag"],
                },
            ],

            linkType: "Entry",
        });

    articleListing.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    articleListing.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the  Article listing",
    });

    articleListing.changeFieldControl("subTitle", "builtin", "singleLine", {
        helpText: "Used as secondary text within the Article listing",
    });

    articleListing.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Use as introductory paragraph for the Article listing",
    });

    articleListing.changeFieldControl("heroImage", "builtin", "entryLinkEditor", {
        helpText: "Image to be used for listing Hero",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    articleListing.changeFieldControl(
        "categories",
        "builtin",
        "entryLinksEditor",
        {
            helpText: "References the category of the article",
            bulkEditing: false,
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    articleListing.changeFieldControl("carousel", "builtin", "entryLinkEditor", {
        helpText: "Used to display latest additional articles ",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    articleListing.changeFieldControl("cta", "builtin", "entryLinkEditor", {
        helpText:
            "References Call to Action elements to allow the visitor to continue their journey",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    articleListing.changeFieldControl(
        "additionalInformation",
        "builtin",
        "entryLinkEditor",
        {
            helpText: "Links to Additional information content type",
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    articleListing.changeFieldControl("seo", "builtin", "entryLinkEditor", {
        helpText: "Reference to page specific SEO",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    articleListing.changeFieldControl("tags", "builtin", "entryLinksEditor", {
        helpText: "Used to group similar elements for search",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const featuredProduct = migration
        .createContentType("featuredProduct")
        .name("Featured Product")
        .description("");

    featuredProduct
        .createField("body")
        .name("Body")
        .type("RichText")
        .localized(false)
        .required(true)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    featuredProduct
        .createField("asset")
        .name("Asset")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    featuredProduct
        .createField("cta")
        .name("CTA")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["cta"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    featuredProduct.changeFieldControl("body", "builtin", "richTextEditor", {
        helpText: "Detailed description of the featured product",
    });

    featuredProduct.changeFieldControl("asset", "builtin", "entryLinkEditor", {
        helpText: "Image relating to the featured product",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    featuredProduct.changeFieldControl("cta", "builtin", "entryLinkEditor", {
        helpText:
            "References Call to Action elements to allow the visitor to continue their journey",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const articleSection = migration
        .createContentType("articleSection")
        .name("Article Section")
        .description("")
        .displayField("title");
    articleSection
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    articleSection
        .createField("body")
        .name("Body")
        .type("RichText")
        .localized(false)
        .required(true)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    articleSection
        .createField("articleSection")
        .name("Article Section")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["articleSection", "featuredProduct"],
                },
            ],

            linkType: "Entry",
        });

    articleSection
        .createField("asset")
        .name("Asset")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    articleSection
        .createField("cta")
        .name("CTA")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["cta"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    articleSection.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the article.",
    });

    articleSection.changeFieldControl("body", "builtin", "richTextEditor", {
        helpText: "Additional information for the article",
    });

    articleSection.changeFieldControl(
        "articleSection",
        "builtin",
        "entryLinksEditor",
        {
            helpText:
                "References to additional article sections or Featured Products",
            bulkEditing: false,
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    articleSection.changeFieldControl("asset", "builtin", "entryLinkEditor", {
        helpText: "Image relating to the article",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    articleSection.changeFieldControl("cta", "builtin", "entryLinkEditor", {
        helpText:
            "References Call to Action elements to allow the visitor to continue their journey",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const articleCategory = migration
        .createContentType("articleCategory")
        .name("Article Category")
        .description("");

    articleCategory
        .createField("articleCategory")
        .name("Article Category")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["cta"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    articleCategory.changeFieldControl(
        "articleCategory",
        "builtin",
        "entryLinkEditor",
        {
            helpText:
                "Article Category takes on the CTA content type. Categories: 'Your glasses style', 'Glasses trends', 'News and updates'",
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    const article = migration
        .createContentType("article")
        .name("Article")
        .description("")
        .displayField("internalName");
    article
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    article
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    article
        .createField("banner")
        .name("Banner")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["banner"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    article
        .createField("category")
        .name("Category")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["articleCategory"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    article
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    article
        .createField("heroImage")
        .name("Hero Image")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    article
        .createField("publishedDate")
        .name("Published Date")
        .type("Date")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    article
        .createField("articleSection")
        .name("Article Section")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["articleSection"],
                },
            ],

            linkType: "Entry",
        });

    article
        .createField("references")
        .name("References")
        .type("RichText")
        .localized(false)
        .required(false)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    article
        .createField("seo")
        .name("SEO")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["seo"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    article
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["tag"],
                },
            ],

            linkType: "Entry",
        });

    article.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    article.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used as the main heading within the page",
    });

    article.changeFieldControl("banner", "builtin", "entryLinkEditor", {
        helpText:
            "A header banner for an article, which, in the case of LoveGlasses,  includes CTAs for the three article category types.",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    article.changeFieldControl("category", "builtin", "entryLinkEditor", {
        helpText: "A single reference to the category of the Article",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    article.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Used as in introductory paragraph for the page",
    });

    article.changeFieldControl("heroImage", "builtin", "entryLinkEditor", {
        helpText: "An image for the Hero Banner",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    article.changeFieldControl("publishedDate", "builtin", "datePicker", {
        ampm: "24",
        format: "timeZ",
        helpText: "The date the article was published",
    });

    article.changeFieldControl("articleSection", "builtin", "entryLinksEditor", {
        helpText: "Additional sections for the article",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    article.changeFieldControl("references", "builtin", "richTextEditor", {
        helpText: "Additional reference information relating to the article",
    });

    article.changeFieldControl("seo", "builtin", "entryLinkEditor", {
        helpText: "reference to page specific SEO",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    article.changeFieldControl("tags", "builtin", "entryLinksEditor", {
        helpText: "Used to group similar elements for search",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const videoContainer = migration
        .createContentType("videoContainer")
        .name("Video Container")
        .description("")
        .displayField("internalName");
    videoContainer
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    videoContainer
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    videoContainer
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    videoContainer
        .createField("video")
        .name("Video")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["video"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    videoContainer.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content.",
    });

    videoContainer.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Title of the container",
    });

    videoContainer.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Description of the container",
    });

    videoContainer.changeFieldControl("video", "builtin", "entryLinkEditor", {
        helpText: "Used for Internal videos",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const table = migration
        .createContentType("table")
        .name("Table")
        .description("")
        .displayField("internalName");
    table
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    table
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    table
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    table
        .createField("rows")
        .name("Rows")
        .type("Integer")
        .localized(false)
        .required(true)
        .validations([
            {
                range: {
                    min: 1,
                },
            },
        ])
        .disabled(false)
        .omitted(false);

    table
        .createField("columns")
        .name("Columns")
        .type("Integer")
        .localized(false)
        .required(true)
        .validations([
            {
                range: {
                    min: 1,
                },
            },
        ])
        .disabled(false)
        .omitted(false);

    table
        .createField("tableData")
        .name("Table Data")
        .type("RichText")
        .localized(false)
        .required(true)
        .validations([
            {
                enabledMarks: ["bold", "italic", "underline", "code"],
                message: "Only bold, italic, underline, and code marks are allowed",
            },
            {
                enabledNodeTypes: [
                    "heading-1",
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
                    "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
            },
            {
                nodes: {},
            },
        ])
        .disabled(false)
        .omitted(false);

    table
        .createField("footnote")
        .name("Footnote")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    table.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content.",
    });

    table.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Used for the heading of the table section",
    });

    table.changeFieldControl("description", "builtin", "markdown", {
        helpText: "A brief description of the content of the table",
    });

    table.changeFieldControl("rows", "builtin", "numberEditor", {
        helpText: "Number of rows for the table",
    });

    table.changeFieldControl("columns", "builtin", "numberEditor", {
        helpText: "Number of columns for the table",
    });

    table.changeFieldControl("tableData", "builtin", "richTextEditor", {
        helpText: "Content within the table",
    });

    table.changeFieldControl("footnote", "builtin", "markdown", {
        helpText: "Footnote for the table",
    });

    const quotation = migration
        .createContentType("quotation")
        .name("Quotation")
        .description("")
        .displayField("internalName");
    quotation
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    quotation
        .createField("quote")
        .name("Quote")
        .type("Text")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    quotation
        .createField("originatorName")
        .name("Originator Name")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    quotation
        .createField("originatorRole")
        .name("Originator Role")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    quotation.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    quotation.changeFieldControl("quote", "builtin", "markdown", {
        helpText: "The Quote content",
    });

    quotation.changeFieldControl("originatorName", "builtin", "singleLine", {
        helpText: "Name of Author",
    });

    quotation.changeFieldControl("originatorRole", "builtin", "singleLine", {
        helpText: "Role of Author",
    });

    const notification = migration
        .createContentType("notification")
        .name("Notification")
        .description("")
        .displayField("internalName");
    notification
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    notification
        .createField("message")
        .name("Message")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    notification
        .createField("displayOn")
        .name("Display On")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["home"],
                },
            ],

            linkType: "Entry",
        });

    notification.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    notification.changeFieldControl("message", "builtin", "singleLine", {
        helpText:
            "Message to be displayed. Notification active period is determined by the publish start and end dates.",
    });

    notification.changeFieldControl("displayOn", "builtin", "entryLinksEditor", {
        helpText:
            "On what page / Page types the message must be displayed. Whilst only one notification is expected to be displayed on any single page, there will be a need to set a high priority notification that overrides other notifications that may have been set for a ",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const form = migration
        .createContentType("form")
        .name("Form")
        .description("")
        .displayField("internalName");
    form
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    form
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    form
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    form
        .createField("formId")
        .name("Form ID")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([
            {
                unique: true,
            },
        ])
        .disabled(false)
        .omitted(false);

    form.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    form.changeFieldControl("name", "builtin", "singleLine", {
        helpText: "Name of the form",
    });

    form.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Description of the form",
    });

    form.changeFieldControl("formId", "builtin", "singleLine", {
        helpText: "Identifier for the form",
    });

    const cta = migration
        .createContentType("cta")
        .name("CTA")
        .description("")
        .displayField("internalName");
    cta
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    cta
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    cta
        .createField("subTitle")
        .name("Sub-Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    cta
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    cta
        .createField("internalLink")
        .name("Internal Link")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: [
                    "article",
                    "articleListing",
                    "brand",
                    "brandListing",
                    "corporate",
                    "home",
                    "productListing",
                    "service",
                ],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    cta
        .createField("externalLink")
        .name("External Link")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    cta
        .createField("linkText")
        .name("Link Text")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    cta
        .createField("asset")
        .name("Asset")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset", "video"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    cta.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText:
            "Used by Authors and Developers to search for existing content. There are currently many different styles of CTAs across the existing websites. Whilst this CTA content type is able to support all of them from 'pure' content perspective, some consideration ",
    });

    cta.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Title",
    });

    cta.changeFieldControl("subTitle", "builtin", "singleLine", {
        helpText: "Sub-Title for CTA",
    });

    cta.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Description of CTA",
    });

    cta.changeFieldControl("internalLink", "builtin", "entryLinkEditor", {
        helpText: "Internal Page location",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    cta.changeFieldControl("externalLink", "builtin", "singleLine", {
        helpText:
            "External page location. Either Internal Link or External Link is required. If it is an internal link, most of the values e.g. name and asset will be picked up from the linked piece of content",
    });

    cta.changeFieldControl("linkText", "builtin", "singleLine", {
        helpText: "Text to be displayed for link",
    });

    cta.changeFieldControl("asset", "builtin", "entryLinkEditor", {
        helpText: "Link to asset / video",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const colour = migration
        .createContentType("colour")
        .name("Colour")
        .description("")
        .displayField("internalName");
    colour
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    colour
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    colour
        .createField("asset")
        .name("Asset")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    colour.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText:
            "Used by Authors and Developers to search for existing content. Used in Guides and Hearing content domains.",
    });

    colour.changeFieldControl("name", "builtin", "singleLine", {
        helpText: "Name of the colour",
    });

    colour.changeFieldControl("asset", "builtin", "entryLinkEditor", {});
    const carousel = migration
        .createContentType("carousel")
        .name("Carousel")
        .description("")
        .displayField("internalName");
    carousel
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    carousel
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    carousel
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    carousel
        .createField("items")
        .name("Items")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["article", "cta", "videoContainer"],
                },
            ],

            linkType: "Entry",
        });

    carousel
        .createField("cta")
        .name("CTA")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["cta"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    carousel.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    carousel.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Title of the carousel",
    });

    carousel.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Description of the Carousel",
    });

    carousel.changeFieldControl("items", "builtin", "entryLinksEditor", {
        helpText:
            "Reference to elements within the carousel. When PIM ID is used, this is expected to retrieve a particular product category from Algolia, which will display all products belonging to the category.",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    carousel.changeFieldControl("cta", "builtin", "entryLinkEditor", {
        helpText: "Links to various Call to Action",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const banner = migration
        .createContentType("banner")
        .name("Banner")
        .description("")
        .displayField("internalName");
    banner
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    banner
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    banner
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    banner
        .createField("asset")
        .name("Asset")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["asset"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    banner
        .createField("cta")
        .name("CTA")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["cta"],
                },
            ],

            linkType: "Entry",
        });

    banner.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText:
            "Used by Authors and Developers to search for existing content. Banners act as either breaks between content sections (e.g. the Hindsight report) or can also act as a grouping of CTA links at the top of a page, e.g. LoveGlasses articles.",
    });

    banner.changeFieldControl("name", "builtin", "singleLine", {
        helpText: "Title of the Banner",
    });

    banner.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Description for the banner",
    });

    banner.changeFieldControl("asset", "builtin", "entryLinkEditor", {
        helpText: "Link to Asset",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    banner.changeFieldControl("cta", "builtin", "entryLinksEditor", {
        helpText: "Links to various Call to Action",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const assetUsage = migration
        .createContentType("assetUsage")
        .name("Asset Usage")
        .description("");
    assetUsage
        .createField("usageRestriction")
        .name("Usage Restriction")
        .type("Boolean")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    assetUsage
        .createField("contryUsage")
        .name("Contry Usage")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",
            validations: [],
            linkType: "Entry",
        });

    assetUsage
        .createField("channelUsage")
        .name("Channel Usage")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",
            validations: [],
            linkType: "Entry",
        });

    assetUsage
        .createField("publishDate")
        .name("Publish Date")
        .type("Date")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    assetUsage
        .createField("expiryDate")
        .name("Expiry Date")
        .type("Date")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    assetUsage.changeFieldControl("usageRestriction", "builtin", "boolean", {
        helpText:
            "Does the asset have restrictions. Given assets are to be managed in Bynder, there may be an integration solution to Contentful that can show digital access rights information relating to an asset, which could render this content type as a surplus to requi",
        trueLabel: "Yes",
        falseLabel: "No",
    });

    assetUsage.changeFieldControl("contryUsage", "builtin", "entryLinksEditor", {
        helpText: "Which countries are permitted to use the asset",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    assetUsage.changeFieldControl("channelUsage", "builtin", "entryLinksEditor", {
        helpText: "Which Channels can use the asset",
        bulkEditing: false,
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    assetUsage.changeFieldControl("publishDate", "builtin", "datePicker", {
        ampm: "24",
        format: "timeZ",
        helpText: "Date asset is published",
    });

    assetUsage.changeFieldControl("expiryDate", "builtin", "datePicker", {
        ampm: "24",
        format: "timeZ",
        helpText: "Date the asset lifecycle ends",
    });

    const asset = migration
        .createContentType("asset")
        .name("Asset")
        .description("")
        .displayField("internalName");
    asset
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    asset
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    asset
        .createField("media")
        .name("Media")
        .type("Link")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false)
        .linkType("Asset");
    asset
        .createField("altText")
        .name("Alt Text")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    asset
        .createField("description")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    asset
        .createField("usage")
        .name("Usage")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    asset.changeFieldControl("internalName", "builtin", "singleLine", {
        helpText: "Used by Authors and Developers to search for existing content",
    });

    asset.changeFieldControl("name", "builtin", "singleLine", {
        helpText: "Name of the asset",
    });

    asset.changeFieldControl("media", "builtin", "assetLinkEditor", {
        helpText: "Type of Media e.g. Image, Video, SVG",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    asset.changeFieldControl("altText", "builtin", "singleLine", {
        helpText: "Alt Text of the asset",
    });

    asset.changeFieldControl("description", "builtin", "markdown", {
        helpText: "Description of the asset",
    });

    asset.changeFieldControl("usage", "builtin", "entryLinkEditor", {
        helpText: "On what platforms can the asset be used",
        showLinkEntityAction: true,
        showCreateEntityAction: true,
    });

    const additionalInformation = migration
        .createContentType("additionalInformation")
        .name("Additional Information")
        .description("")
        .displayField("internalName");
    additionalInformation
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    additionalInformation
        .createField("title")
        .name("Title")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    additionalInformation
        .createField("description")
        .name("Description")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    additionalInformation
        .createField("cta")
        .name("CTA")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",
            validations: [],
            linkType: "Entry",
        });

    additionalInformation.changeFieldControl(
        "internalName",
        "builtin",
        "singleLine",
        {
            helpText:
                "Used by Authors and Developers to search for existing content. Additional Information are a group of CTAs that appear at the end of each page.",
        }
    );

    additionalInformation.changeFieldControl("title", "builtin", "singleLine", {
        helpText: "Title of the additional information section",
    });

    additionalInformation.changeFieldControl(
        "description",
        "builtin",
        "singleLine",
        {
            helpText: "Description of the Section",
        }
    );

    additionalInformation.changeFieldControl(
        "cta",
        "builtin",
        "entryLinksEditor",
        {
            helpText: "Links to various Call to Action",
            bulkEditing: false,
            showLinkEntityAction: true,
            showCreateEntityAction: true,
        }
    );

    const product = migration
        .createContentType("product")
        .name("Product")
        .displayField("productName");
    product
        .createField("productName")
        .name("Product name")
        .type("Text")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    product
        .createField("slug")
        .name("Slug")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    product
        .createField("productDescription")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    product
        .createField("sizetypecolor")
        .name("Size/Type/Color")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    product
        .createField("image")
        .name("Image")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",
            validations: [],
            linkType: "Asset",
        });

    product
        .createField("tags")
        .name("Tags")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Symbol",
            validations: [],
        });

    product
        .createField("categories")
        .name("Categories")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["category"],
                },
            ],

            linkType: "Entry",
        });

    product
        .createField("price")
        .name("Price")
        .type("Number")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    product
        .createField("brand")
        .name("Brand")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([
            {
                linkContentType: ["brand"],
            },
        ])
        .disabled(false)
        .omitted(false)
        .linkType("Entry");

    product
        .createField("quantity")
        .name("Quantity")
        .type("Integer")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    product
        .createField("sku")
        .name("SKU")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    product
        .createField("website")
        .name("Available at")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    const category = migration
        .createContentType("category")
        .name("Category")
        .displayField("title");
    category
        .createField("title")
        .name("Title")
        .type("Text")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    category
        .createField("icon")
        .name("Icon")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .linkType("Asset");
    category
        .createField("categoryDescription")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    const brand = migration
        .createContentType("brand")
        .name("Brand")
        .displayField("companyName");
    brand
        .createField("companyName")
        .name("Company name")
        .type("Text")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);
    brand
        .createField("logo")
        .name("Logo")
        .type("Link")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .linkType("Asset");
    brand
        .createField("companyDescription")
        .name("Description")
        .type("Text")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    brand
        .createField("website")
        .name("Website")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    brand
        .createField("twitter")
        .name("Twitter")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    brand
        .createField("email")
        .name("Email")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    brand
        .createField("phone")
        .name("Phone #")
        .type("Array")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Symbol",
            validations: [],
        });
};
