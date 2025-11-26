-- disable edi connections in general, and the Italian one (l10n_it_edi_sdicoop) in particular
-- for malaysian edi, this script can cause issue as you could have both a demo and prod user, in which case it breaks the unique constrain. Another neutralize in the malaysian module disable the clients instead.
UPDATE account_edi_proxy_client_user
SET edi_mode = CASE
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    WHEN proxy_type = 'l10n_it_edi' THEN 'demo'
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'l10n_dk_nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'l10n_dk_nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'l10n_dk_nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'l10n_dk_nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
=======
                    WHEN proxy_type IN ('l10n_it_edi', 'peppol', 'nemhandel') THEN 'demo'
>>>>>>> upstream/18.0
                    ELSE 'test'
               END
WHERE proxy_type != 'l10n_my_edi';
