import { _t } from "@web/core/l10n/translation";
import { Component, useEffect, useState } from "@odoo/owl";
import { useService, useAutofocus } from "@web/core/utils/hooks";

import { NavigableList } from "@mail/core/common/navigable_list";
import { useSequential } from "@mail/utils/common/hooks";

export class MentionList extends Component {
    static template = "mail.MentionList";
    static components = { NavigableList };
    static props = {
        onSelect: { type: Function },
        close: { type: Function, optional: true },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
=======
        thread: { optional: true },
>>>>>>> upstream/18.0
        type: { type: String },
    };
    static defaultProps = {
        close: () => {},
    };

    setup() {
        super.setup();
        this.state = useState({
            searchTerm: "",
            options: [],
            isFetching: false,
        });
        this.orm = useService("orm");
        this.store = useState(useService("mail.store"));
        this.suggestionService = useService("mail.suggestion");
        this.sequential = useSequential();
        this.ref = useAutofocus({ mobile: true });

        useEffect(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            () => {
                if (!this.state.searchTerm) {
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
=======
            (term, delimiter, thread) => {
                if (!term) {
>>>>>>> upstream/18.0
                    this.state.options = [];
                    return;
                }
                this.sequential(async () => {
                    this.state.isFetching = true;
                    try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        await this.suggestionService.fetchSuggestions({
                            delimiter: this.props.type === "partner" ? "@" : "#",
                            term: this.state.searchTerm,
                        });
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
=======
                        await this.suggestionService.fetchSuggestions({ delimiter, term });
>>>>>>> upstream/18.0
                    } finally {
                        this.state.isFetching = false;
                    }
                    const { suggestions } = this.suggestionService.searchSuggestions(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        {
                            delimiter: this.props.type === "partner" ? "@" : "#",
                            term: this.state.searchTerm,
                        },
                        { sort: true }
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
=======
                        { delimiter, term },
                        { sort: true, thread }
>>>>>>> upstream/18.0
                    );
                    this.state.options = suggestions;
                });
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            () => [this.state.searchTerm]
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
            () => [
                this.state.searchTerm,
                this.props.type === "partner" ? "@" : "#",
                this.props.thread,
            ]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        );
    }

    get placeholder() {
        switch (this.props.type) {
            case "channel":
                return _t("Search for a channel...");
            case "partner":
                return _t("Search for a user...");
            default:
                return _t("Search...");
        }
    }

    get navigableListProps() {
        const props = {
            anchorRef: this.ref.el,
            position: "bottom-fit",
            isLoading: !!this.state.searchTerm && this.state.isFetching,
            onSelect: (...args) => {
                this.props.onSelect(...args);
                this.props.close();
            },
            options: [],
        };
        switch (this.props.type) {
            case "partner":
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                this.state.options.forEach((option) => {
                    props.options.push({
                        label: option.name,
                        partner: option,
                    });
                });
                break;
            case "channel": {
                this.state.options.forEach((option) => {
                    props.options.push({
                        label: option.name,
                        channel: option,
                    });
                });
                break;
            }
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
                props.optionTemplate = "mail.Composer.suggestionPartner";
                props.options = this.state.options.map((suggestion) => {
                    return {
                        label: suggestion.name,
                        partner: suggestion,
                        classList: "o-mail-Composer-suggestion",
                    };
                });
                break;
            case "channel":
                props.optionTemplate = "mail.Composer.suggestionThread";
                props.options = this.state.options.map((suggestion) => {
                    return {
                        label: suggestion.displayName,
                        thread: suggestion,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
=======
                        channel: suggestion,
>>>>>>> upstream/18.0
                        classList: "o-mail-Composer-suggestion",
                    };
                });
                break;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        return props;
    }

    onKeydown(ev) {
        switch (ev.key) {
            case "Escape": {
                this.props.close();
                break;
            }
        }
    }
}
