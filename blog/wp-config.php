<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'namak1w2_namak');

/** MySQL database username */
define('DB_USER', 'namak1w2_namak');

/** MySQL database password */
define('DB_PASSWORD', 'TNlN==fY&($s');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'W;UTrnS<PQ5>lIth&]/c?xL2-=Oj|6wc4xUThI_JJD;5VWsns+|nP$ n,`5DOgl&');
define('SECURE_AUTH_KEY',  'g]yr4F-dkl*O~cy2qJ-fy[7OmZ!:KHtR1]UtHhME-JyZ:DcQ&6ieZ|]qyH(qzY8A');
define('LOGGED_IN_KEY',    'NO</O_Pk`!ARw&$-u^yS37/Bi+0Gzy$wpEbGq:`{:Ev?iq?~ q)uT~dnQXzK)twG');
define('NONCE_KEY',        'V%n opWkm8I2vu9V|+J2f5l_K%=^Re&MV(#TT!hekWF{8ELO}DD3vwh`,9[$%/T-');
define('AUTH_SALT',        '5%78.rA^619o!EnJ}8Pd<A-ud`RUvF{Io_|R>)<Fu<ltJFOz<gJm48alKQZtNiB-');
define('SECURE_AUTH_SALT', '*)@[o^QL(Kw9_3IB+EunO2@[Rfmvtapob*@Q#k7JdFl`!3.g_2S4+ndp=K5j$a`?');
define('LOGGED_IN_SALT',   'y*!BXJm(B(|a5&er~xgCeY.6l,e?xo9X1I)C@]V54E-P6&ciAZ8}=j!GdBh/?MX#');
define('NONCE_SALT',       'W|4)R5ZR*Kah_`<7?kAhJSCA26c`#G~7Y@!1:[~{CV]/d%^?QQa]t>avmg.nt[pJ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
