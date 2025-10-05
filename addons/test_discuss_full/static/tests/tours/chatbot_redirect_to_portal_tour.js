import { registry } from "@web/core/registry";

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
registry.category("web_tour.tours").add("test_mail_full.chatbot_redirect_to_portal", {
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
=======
registry.category("web_tour.tours").add("chatbot_redirect_to_portal", {
>>>>>>> upstream/18.0
    url: "/contactus",
    steps: () => [
        {
            trigger: ".o-livechat-root:shadow .o-livechat-LivechatButton",
            run: "click",
        },
        {
            trigger:
                ".o-livechat-root:shadow .o-mail-Message:contains(Hello, were do you want to go?)",
            run: "click",
        },
        {
            trigger: ".o-livechat-root:shadow li:contains(Go to the portal page)",
            run: "click",
        },
        {
            trigger: ".o-livechat-root:shadow .o-mail-Message:contains('Go to the portal page')",
        },
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
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
=======
        { trigger: "#chatterRoot:shadow .o-mail-Chatter" },
>>>>>>> upstream/18.0
        {
            trigger: ".o-livechat-root:shadow .o-mail-Message:last:contains('Tadam')",
        },
    ],
});
