import { Message } from "@mail/core/common/message_model";
import { patch } from "@web/core/utils/patch";

patch(Message.prototype, {
    /** @type {Promise[]} */
    mentionedChannelPromises: [],
    /**
     * @override
     */
    async edit(body, attachments = [], { mentionedChannels = [], mentionedPartners = [] } = {}) {
        const validChannels = (await Promise.all(this.mentionedChannelPromises)).filter(
            (channel) => channel !== undefined
        );
        const allChannels = this.store.Thread.insert([...validChannels, ...mentionedChannels]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        super.edit(body, attachments, {
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
=======
        return await super.edit(body, attachments, {
>>>>>>> upstream/18.0
            mentionedChannels: allChannels,
            mentionedPartners,
        });
    },
});
