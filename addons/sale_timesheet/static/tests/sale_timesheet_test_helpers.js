<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { AccountAnalyticLine } from "@analytic/../tests/mock_server/mock_models/account_analytic_line";
=======
import { analyticModels } from "@analytic/../tests/analytic_test_helpers";
>>>>>>> upstream/18.0
=======
import { analyticModels } from "@analytic/../tests/analytic_test_helpers";
>>>>>>> upstream/18.0
=======
import { analyticModels } from "@analytic/../tests/analytic_test_helpers";
>>>>>>> upstream/18.0
=======
import { analyticModels } from "@analytic/../tests/analytic_test_helpers";
>>>>>>> upstream/18.0
=======
import { analyticModels } from "@analytic/../tests/analytic_test_helpers";
>>>>>>> upstream/18.0
=======
import { analyticModels } from "@analytic/../tests/analytic_test_helpers";
>>>>>>> upstream/18.0
=======
import { analyticModels } from "@analytic/../tests/analytic_test_helpers";
>>>>>>> upstream/18.0
import { mailModels } from "@mail/../tests/mail_test_helpers";
import { ProjectTask } from "@project/../tests/mock_server/mock_models/project_task";
import { SaleOrderLine } from "@sale/../tests/mock_server/mock_models/sale_order_line";
import { defineModels } from "@web/../tests/web_test_helpers";

export const saleTimesheetModels = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    AccountAnalyticLine,
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
=======
>>>>>>> upstream/18.0
    ProjectTask,
    SaleOrderLine,
};

export function defineSaleTimesheetModels() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return defineModels({ ...mailModels, ...saleTimesheetModels });
=======
    return defineModels({ ...mailModels, ...analyticModels, ...saleTimesheetModels });
>>>>>>> upstream/18.0
=======
    return defineModels({ ...mailModels, ...analyticModels, ...saleTimesheetModels });
>>>>>>> upstream/18.0
=======
    return defineModels({ ...mailModels, ...analyticModels, ...saleTimesheetModels });
>>>>>>> upstream/18.0
=======
    return defineModels({ ...mailModels, ...analyticModels, ...saleTimesheetModels });
>>>>>>> upstream/18.0
=======
    return defineModels({ ...mailModels, ...analyticModels, ...saleTimesheetModels });
>>>>>>> upstream/18.0
=======
    return defineModels({ ...mailModels, ...analyticModels, ...saleTimesheetModels });
>>>>>>> upstream/18.0
=======
    return defineModels({ ...mailModels, ...analyticModels, ...saleTimesheetModels });
>>>>>>> upstream/18.0
}
