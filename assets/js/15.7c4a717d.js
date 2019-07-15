(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{168:function(s,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"mysql-howtos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-howtos","aria-hidden":"true"}},[s._v("#")]),s._v(" MySQL HowTos")]),s._v(" "),t("h2",{attrs:{id:"数据导入导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据导入导出","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据导入导出")]),s._v(" "),t("h3",{attrs:{id:"如何导出一张表的数据及结构？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何导出一张表的数据及结构？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何导出一张表的数据及结构？")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -uroot -p --databases DBNAME --tables table_1 table_2  "),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" db_backup.sql\n")])])]),t("h3",{attrs:{id:"如何导出表结构？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何导出表结构？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何导出表结构？")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -uroot -p --databases DBNAME --no-data "),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" db_tables.sql\n")])])]),t("h2",{attrs:{id:"数据库账号及授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库账号及授权","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据库账号及授权")]),s._v(" "),t("h3",{attrs:{id:"如何创建数据库？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何创建数据库？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何创建数据库？")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("{DATABASE_NAME}"),t("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("CHARACTER")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" utf8"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"如何创建数据库账号并授权？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何创建数据库账号并授权？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何创建数据库账号并授权？")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("{DATABASE_NAME}"),t("span",{attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'{DATABASE_USER}'")]),s._v("@'{IP}"),t("span",{attrs:{class:"token string"}},[s._v("' IDENTIFIED BY '")]),s._v("{PASSWORD}'"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"如何创建只读的数据库帐号？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何创建只读的数据库帐号？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何创建只读的数据库帐号？")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("*")]),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'DB_USER'")]),s._v("@'IP"),t("span",{attrs:{class:"token string"}},[s._v("' IDENTIFIED BY '")]),s._v("DB_PASSWORD'"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"数据库管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库管理","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据库管理")]),s._v(" "),t("h3",{attrs:{id:"如何修改数据库账号密码？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何修改数据库账号密码？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何修改数据库账号密码？")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" mysql"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("upser"),t("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" password"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("PASSWORD"),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token string"}},[s._v('"YOUR_DB_PASSWORD"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("User")]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token string"}},[s._v("'YOUR_DB_USER'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{attrs:{class:"token comment"}},[s._v("# 请修改你要修改的数据库用户及密码")]),s._v("\nFLUSH "),t("span",{attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("MySql 5.7.6 起安装时 root 不设置密码，那么默认会采用 auth_socket 的方式登陆 MySQL。也就是登陆 MySQL 时验证你的 Linux 的当前用户是否为root，如果不是就不能登陆。")]),s._v(" "),t("p",[s._v("这时你按照上述的方式修改密码是不起作用的，需修改密码的同时，把密码的验证方式也修改为"),t("code",[s._v("mysql_native_password")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'root'")]),s._v("@'localhost"),t("span",{attrs:{class:"token string"}},[s._v("' IDENTIFIED WITH mysql_native_password BY '")]),s._v("YOUR_NEW_PASSWORD'"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFLUSH "),t("span",{attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("h3",{attrs:{id:"如何开放-root-帐号给局域网内的服务器访问？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何开放-root-帐号给局域网内的服务器访问？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何开放 root 帐号给局域网内的服务器访问？")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'root'")]),s._v("@'"),t("span",{attrs:{class:"token number"}},[s._v("192.168")]),t("span",{attrs:{class:"token number"}},[s._v(".1")]),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{attrs:{class:"token operator"}},[s._v("%")]),t("span",{attrs:{class:"token string"}},[s._v("'; # 请修改你的内网IP\nGRANT ALL PRIVILEGES ON *.* TO '")]),s._v("root"),t("span",{attrs:{class:"token string"}},[s._v("'@'")]),t("span",{attrs:{class:"token number"}},[s._v("192.168")]),t("span",{attrs:{class:"token number"}},[s._v(".1")]),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("'"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"如何不重启数据库，调整慢查询时长参数？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何不重启数据库，调整慢查询时长参数？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何不重启数据库，调整慢查询时长参数？")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" general_log "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'ON'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" variables "),t("span",{attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'long_query_time'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" long_query_time "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("1")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{attrs:{class:"token comment"}},[s._v("# 设置为1秒")]),s._v("\n\n")])])]),t("p",[s._v("验证:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" sleep"),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token number"}},[s._v("1.5")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("查看慢查询日志，看看是否有这条语句。")])])}],!1,null,null,null);r.options.__file="mysql-howtos.md";a.default=r.exports}}]);