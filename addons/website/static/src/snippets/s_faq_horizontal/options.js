import options from "@web_editor/js/editor/snippets.options";

options.registry.faqHorizontalMultipleItems = options.registry.MultipleItems.extend({
    _addItemCallback() {
        // Find the iframe and its #wrapwrap
        const iframe = document.querySelector('.o_iframe');
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const wrapwrap = iframeDocument.getElementById('wrapwrap');
=======
        const scrollingEl = iframeDocument.scrollingElement;
>>>>>>> upstream/18.0
=======
        const scrollingEl = iframeDocument.scrollingElement;
>>>>>>> upstream/18.0
=======
        const scrollingEl = iframeDocument.scrollingElement;
>>>>>>> upstream/18.0
=======
        const scrollingEl = iframeDocument.scrollingElement;
>>>>>>> upstream/18.0
=======
        const scrollingEl = iframeDocument.scrollingElement;
>>>>>>> upstream/18.0

        const topics = this.$target[0].getElementsByClassName('s_faq_horizontal_entry');
        const newTopic = topics[topics.length - 1];
        const newTopicRect = newTopic.getBoundingClientRect();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const wrapwrapRect = wrapwrap.getBoundingClientRect();

        const scrollTop = wrapwrap.scrollTop;
        const centerY = (newTopicRect.top - wrapwrapRect.top) + scrollTop - (wrapwrap.clientHeight / 2) + (newTopicRect.height / 2);

        wrapwrap.scrollTo({
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0

        const scrollTop = scrollingEl.scrollTop;
        const centerY = newTopicRect.top + scrollTop - (scrollingEl.clientHeight / 2) + (newTopicRect.height / 2);

        scrollingEl.scrollTo({
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
            top: centerY,
            behavior: 'smooth'
        });
    }
});
