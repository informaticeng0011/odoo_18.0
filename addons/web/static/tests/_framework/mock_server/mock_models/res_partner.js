import { serverState } from "../../mock_server_state.hoot";
import { ServerModel } from "../mock_model";

export class ResPartner extends ServerModel {
    _name = "res.partner";

    _records = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {
            id: serverState.companies[0]?.id,
            active: true,
            name: serverState.companies[0]?.name,
        },
=======
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        ...serverState.companies.map((company) => ({
            id: company.id,
            active: true,
            name: company.name,
        })),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
        {
            id: serverState.partnerId,
            active: true,
            name: serverState.partnerName,
        },
        {
            id: serverState.publicPartnerId,
            active: true,
            is_public: true,
            name: serverState.publicPartnerName,
        },
        {
            id: serverState.odoobotId,
            active: false,
            im_status: "bot",
            name: "OdooBot",
        },
    ];
}
