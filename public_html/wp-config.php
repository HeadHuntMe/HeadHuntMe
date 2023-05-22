<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'headhuntme_strona' );

/** Database username */
define( 'DB_USER', 'headhuntme_strona' );

/** Database password */
define( 'DB_PASSWORD', '&*BHauc4;Y13' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.fA#l$D}7{SE^b{%Ax>9$*R%H# &5qd#d6My51G]WURSZFFdaof[fRp@. EXA!a4' );
define( 'SECURE_AUTH_KEY',  '@r)]!cVR(l$q7;j7i7? K/[_SEt?m G/:&[&!=nX7K`%m,}e{MbyV%K!hK7y)M=}' );
define( 'LOGGED_IN_KEY',    '=>nfTU-EogvOR([lfN!puX@Jrul@3{|ZRh;|#)f(N-X,VF-}OwV.zB]JX0oY9J3^' );
define( 'NONCE_KEY',        '6#]6IY2}j<QpxbQ%_o_O|}f)(IhJuJd=I3oDJS_lyTx,TDM06KH].|A*xO;3Jte0' );
define( 'AUTH_SALT',        'S4MC2O.y8m4(^@[GDQ<,P0NFnBoud=GHsF520 E_!o=dV(ms6HE3=^P?k1I06)Q%' );
define( 'SECURE_AUTH_SALT', 'agX.%fNo Wm80y6nNsfDN;##qxw0e?6l+q@HA#v|^Bg!WLWnh6sY5<0~M!k0{5$p' );
define( 'LOGGED_IN_SALT',   '&>SL3fY.C2l=oTu_XpO)%Z{-}^VZXP{0<o9.~DMNMgL!---%0s0yCTMMB1(=4^6d' );
define( 'NONCE_SALT',       '87KP)y%~h_KbdJkn&xqj|9MG;A1}80r#>y~#<(nD7m4|5NdiX#`wSCfk{Kp*BK3D' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
