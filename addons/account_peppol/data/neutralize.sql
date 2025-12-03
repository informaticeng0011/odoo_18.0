<<<<<<< HEAD
UPDATE ir_config_parameter
SET value = 'test'
WHERE key = 'account_peppol.edi.mode';
=======
INSERT INTO ir_config_parameter (key, value)
     VALUES ('account_peppol.edi.mode', 'test')
ON CONFLICT (key) DO UPDATE
        SET VALUE = 'test';
>>>>>>> upstream/18.0
