import * as ProductScreen from "@point_of_sale/../tests/tours/utils/product_screen_util";
import * as FloorScreen from "@pos_restaurant/../tests/tours/utils/floor_screen_util";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
=======
import * as PosLoyalty from "@pos_loyalty/../tests/tours/utils/pos_loyalty_util";
>>>>>>> upstream/18.0
import * as Dialog from "@point_of_sale/../tests/tours/utils/dialog_util";
import * as Chrome from "@point_of_sale/../tests/tours/utils/chrome_util";
import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add("PosRestaurantRewardStay", {
    steps: () =>
        [
            Chrome.startPoS(),
            Dialog.confirm("Open Register"),
            FloorScreen.clickTable("5"),
            ProductScreen.clickDisplayedProduct("Water"),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            ProductScreen.totalAmountIs("1.98"),
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
            Chrome.clickPlanButton(),
            Chrome.clickBtn("second floor"),
            Chrome.clickBtn("main floor"),
            FloorScreen.clickTable("5"),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            ProductScreen.totalAmountIs("1.98"),
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
=======
            PosLoyalty.hasRewardLine("10% on your order", "-0.22", "1"),
>>>>>>> upstream/18.0
        ].flat(),
});
