import{r as o,o as t,c as i,a as e,b as a,F as r,e as l,d as n}from"./app.91c9ffb2.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=l(`<h1 id="development-of-lunarvim" tabindex="-1"><a class="header-anchor" href="#development-of-lunarvim" aria-hidden="true">#</a> Development of Lunarvim</h1><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h2><p>We recommend setting up a symlink to your fork:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.local/share/lunarvim/
<span class="token function">ln</span> -s ~/dev/Lunarvim ~/.local/share/lunarvim/lvim_dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Your output should be something like:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ls</span> -a
lrwxrwxrwx  <span class="token number">1</span> user user   <span class="token number">37</span> sep <span class="token number">23</span> <span class="token number">14</span>:35 lvim_dev -<span class="token operator">&gt;</span> /home/user/dev/LunarVim
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><p>Now switch your lvim to the development setup:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.local/share/lunarvim/
<span class="token function">mv</span> lvim lvim_back
<span class="token function">mv</span> lvim_dev lvim
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr><p>Going back to lvim</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.local/share/lunarvim/
<span class="token function">mv</span> lvim lvim_dev
<span class="token function">mv</span> lvim_back lvim
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>To test that you can get some output from <code>lvim</code> add the following to your <code>init.lua</code> file in your fork.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token function">print</span> <span class="token punctuation">(</span><span class="token string">&quot;it works&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lvim
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Now type <code>:messages</code>. Happy contributing!</p><h2 id="lua-neovim" tabindex="-1"><a class="header-anchor" href="#lua-neovim" aria-hidden="true">#</a> Lua + Neovim = \u2764\uFE0F</h2>`,17),h=n("To get started, "),p={href:"https://github.com/nanotee/nvim-lua-guide",target:"_blank",rel:"noopener noreferrer"},m=n("this guide"),_=n(" covers many points that will get you going with Lua and how Neovim works."),b=e("h2",{id:"official-documentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#official-documentation","aria-hidden":"true"},"#"),n(" Official Documentation")],-1),v=n("The "),f={href:"https://www.lua.org/manual/5.4/",target:"_blank",rel:"noopener noreferrer"},g=n("reference manual"),k=n(" is the official definition of the Lua language."),y=n("If you don't know about it, "),w={href:"https://devdocs.io/lua~5.4/",target:"_blank",rel:"noopener noreferrer"},x=n("DevDocs"),L=n(" combines multiple API documentations in a fast, organized, and searchable interface."),N=e("h2",{id:"neovim-documentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#neovim-documentation","aria-hidden":"true"},"#"),n(" Neovim Documentation")],-1),I=n("Neovim provides a "),S={href:"https://neovim.io/doc/user/lua.html",target:"_blank",rel:"noopener noreferrer"},V=n("standard library"),q=n(" which you should know about."),A=e("p",null,[n("It provides many functions that you wish were implemented in Lua's stdlib, for instance "),e("code",null,"strings.split"),n(".")],-1),D=n("It also comes with a "),T={href:"https://neovim.io/doc/user/lsp.html",target:"_blank",rel:"noopener noreferrer"},B=n("LSP framework"),C=n(" and "),E={href:"https://neovim.io/doc/user/",target:"_blank",rel:"noopener noreferrer"},G=n("much more"),z=n("."),F=e("h2",{id:"style-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#style-guide","aria-hidden":"true"},"#"),n(" Style Guide")],-1),P=n("LuaRock "),j={href:"https://github.com/luarocks/lua-style-guide",target:"_blank",rel:"noopener noreferrer"},H=n("style guide"),J=n(" is a complete work that deserves a look if you want learn how to write consistent and robust code."),M=e("p",null,"It is based on many pre-existing guides, provides rationals for all their decisions, and worked successfully in a long-running project.",-1),O=e("h2",{id:"code-quality",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#code-quality","aria-hidden":"true"},"#"),n(" Code Quality")],-1),Q=n("To ensure code quality and a consistent style, our "),R={href:"https://github.com/Lunarvim/LunarVim/actions",target:"_blank",rel:"noopener noreferrer"},W=n("CI"),Y=n(" uses the following tools:"),$=n("Lua: "),K={href:"https://github.com/JohnnyMorganz/StyLua",target:"_blank",rel:"noopener noreferrer"},U=n("Stylua"),X=n(". An opinionated Lua code formatter."),Z={href:"https://github.com/mpeterv/luacheck",target:"_blank",rel:"noopener noreferrer"},ee=n("Luacheck"),ne=n(". A tool for linting and static analysis of Lua code."),se=n("Shell "),ae={href:"https://github.com/mvdan/sh",target:"_blank",rel:"noopener noreferrer"},oe=n("Shfmt"),te=n(". A shell parser, formatter, and interpreter with bash support."),ie={href:"https://github.com/koalaman/shellcheck",target:"_blank",rel:"noopener noreferrer"},re=n("Shellcheck"),le=n(". A static analysis tool for shell scripts.");function ce(de,ue){const s=o("ExternalLinkIcon");return t(),i(r,null,[u,e("p",null,[h,e("a",p,[m,a(s)]),_]),b,e("p",null,[v,e("a",f,[g,a(s)]),k]),e("p",null,[y,e("a",w,[x,a(s)]),L]),N,e("p",null,[I,e("a",S,[V,a(s)]),q]),A,e("p",null,[D,e("a",T,[B,a(s)]),C,e("a",E,[G,a(s)]),z]),F,e("p",null,[P,e("a",j,[H,a(s)]),J]),M,O,e("p",null,[Q,e("a",R,[W,a(s)]),Y]),e("ul",null,[e("li",null,[$,e("ul",null,[e("li",null,[e("a",K,[U,a(s)]),X]),e("li",null,[e("a",Z,[ee,a(s)]),ne])])]),e("li",null,[se,e("ul",null,[e("li",null,[e("a",ae,[oe,a(s)]),te]),e("li",null,[e("a",ie,[re,a(s)]),le])])])])],64)}var me=c(d,[["render",ce]]);export{me as default};
