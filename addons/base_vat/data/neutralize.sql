UPDATE ir_config_parameter
SET value = 'dummy_token'
<<<<<<< HEAD
WHERE key = 'vies_iap.client_token';

UPDATE ir_config_parameter
SET value = 'dummy_identifier'
WHERE key = 'vies_iap.client_identifier';
=======
WHERE key = 'iap_vies.client_token';

UPDATE ir_config_parameter
SET value = 'dummy_identifier'
WHERE key = 'iap_vies.client_identifier';
>>>>>>> upstream/18.0
