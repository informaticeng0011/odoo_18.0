/** @odoo-module **/

import { registry } from "@web/core/registry";

/**
 * This tour tests that a public user can not react to messages
 */
registry.category("web_tour.tours").add("course_reviews_reaction_public", {
    url: "/slides",
    steps: () => [
        {
            trigger: "a:contains(Basics of Gardening - Test)",
            run: "click",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
=======
            expectUnloadPage: true,
>>>>>>> upstream/18.0
        },
        {
            trigger: "a[id=review-tab]",
            run: "click",
        },
        {
            trigger: "#chatterRoot:shadow .o-mail-Message-textContent:contains(Bad course!)",
            run: "hover && click",
        },
        {
            trigger: "#chatterRoot:shadow .o-mail-Message-actions",
            run: async () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                const addReactionButton = document.querySelector('#chatterRoot').shadowRoot.querySelector("[title='Add a Reaction']")
                if (addReactionButton) {
                    throw new Error("Non-authenticated user should not be able to add a reaction to a message");
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                const addReactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector("[title='Add a Reaction']");
                if (addReactionButton) {
                    throw new Error(
                        "Non-authenticated user should not be able to add a reaction to a message"
                    );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                }
            },
        },
        {
            trigger: "#chatterRoot:shadow .o-mail-Message-core",
            run: () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                const reactionButton = document.querySelector("#chatterRoot").shadowRoot.querySelector(".o-mail-MessageReaction")
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
=======
                const reactionButton = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReaction");
>>>>>>> upstream/18.0
                reactionButton.dispatchEvent(new Event("mouseenter"));
            },
        },
        {
            trigger: "#chatterRoot:shadow .o-mail-MessageReactionList-preview",
            run: "click",
        },
        {
            trigger: "#chatterRoot:shadow .o-mail-MessageReactionMenu",
        },
        {
            trigger: "#chatterRoot:shadow .o-mail-Message-core",
            run: () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                const addReaction = document.querySelector("#chatterRoot").shadowRoot.querySelector(".o-mail-MessageReactions-add")
                if (addReaction) {
                    throw new Error("Non-authenticated user should not be able to add a reaction to a message");
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                const addReaction = document
                    .querySelector("#chatterRoot")
                    .shadowRoot.querySelector(".o-mail-MessageReactions-add");
                if (addReaction) {
                    throw new Error(
                        "Non-authenticated user should not be able to add a reaction to a message"
                    );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
                }
            },
        },
    ],
});
