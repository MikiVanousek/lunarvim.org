import{r as l,o as r,c,a as n,b as a,w as i,F as p,e as t,d as s}from"./app.91c9ffb2.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=t(`<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><h2 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h2><ol><li>Make sure to check that you have a recent Neovim version with <code>luajit</code> support. The output of version information <code>nvim -v</code> should include a line for: <code>LuaJIT</code>.</li><li>Make sure all the dependencies listed in <a href="#manual-install">Manual Install</a> are actually installed on your system.</li></ol><h2 id="unable-to-run-lvim" tabindex="-1"><a class="header-anchor" href="#unable-to-run-lvim" aria-hidden="true">#</a> Unable to run <code>lvim</code></h2><p>Make sure that <code>lvim</code> is available and executable on your path. You can check the results of these commands to verify that</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">which</span> lvim
<span class="token function">stat</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> lvim<span class="token variable">)</span></span>&quot;</span>
<span class="token function">cat</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> lvim<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>If you get errors with any of the above commands, then you need to either fix that manually or reinstall the binary again.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>lunarvim-repo<span class="token operator">&gt;</span> <span class="token comment"># this will be in \`~/.local/share/lunarvim/lvim\` by default</span>
<span class="token function">bash</span> utils/installer/install_bin.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="getting-errors-after-an-update" tabindex="-1"><a class="header-anchor" href="#getting-errors-after-an-update" aria-hidden="true">#</a> Getting errors after an update</h2><h3 id="cache-issues" tabindex="-1"><a class="header-anchor" href="#cache-issues" aria-hidden="true">#</a> Cache issues</h3>`,10),m=s("This might be the result of old cache files that need to be reset. LunarVim makes use of "),k={href:"https://github.com/lewis6991/impatient.nvim",target:"_blank",rel:"noopener noreferrer"},_=s("impatients's"),b=s(" to optimize the startup procedure and deliver a snappy experience."),g=n("ol",null,[n("li",null,[s("while running LunarVim: "),n("code",null,":LvimCacheReset")]),n("li",null,[s("from the CLI: "),n("code",null,"lvim +LvimCacheReset")])],-1),v=n("h3",{id:"plugin-issue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-issue","aria-hidden":"true"},"#"),s(" Plugin issue")],-1),f=s("Another common reason for such errors is due to Packer being unable to fully restore a snapshot. This could be due to multiple reasons, but mostl commonly it's a breaking change in some plugin, or "),y=n("code",null,"git",-1),x=s(" refusing to pull an update to a plugin because it "),I={href:"https://blog.sffc.xyz/post/185195398930/why-you-should-use-git-pull-ff-only-git-is-a",target:"_blank",rel:"noopener noreferrer"},w=s("can't safely fast-forward the current branch"),L=s("."),R=s("The easiest way to solve this is to manually update (a rebase is likely required) the offending plugin, which should be located in "),q={href:"https://github.com/wbthomason/packer.nvim/blob/4dedd3b08f8c6e3f84afbce0c23b66320cd2a8f2/doc/packer.txt#L199",target:"_blank",rel:"noopener noreferrer"},M=s("Packer's package-root"),N=s(" at "),V=n("code",null,"$LUNARVIM_RUNTIME_DIR/site/pack/packer",-1),U=s("."),T=t(`<p>Let&#39;s say it&#39;s <code>nvim-cmp</code> for example</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span><span class="token operator">!</span> git <span class="token operator">-</span>C <span class="token string">&quot;$LUNARVIM_RUNTIME_DIR/site/pack/packer/start/nvim-cmp&quot;</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>now check which commit is currently checked out</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span><span class="token operator">!</span> git <span class="token operator">-</span>C <span class="token string">&quot;$LUNARVIM_RUNTIME_DIR/site/pack/packer/start/nvim-cmp&quot;</span> log <span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>it should match the one in <code>$LUNARVIM_RUNTIME_DIR/lvim/snapshots/default.json</code>, but you can always restore the snapshot with <code>:LvimSyncCorePlugins</code></p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span><span class="token operator">!</span> git <span class="token operator">-</span>C <span class="token string">&quot;$LUNARVIM_RUNTIME_DIR/site/pack/packer/start/nvim-cmp&quot;</span> pull <span class="token operator">-</span><span class="token operator">-</span>rebase
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="packer-failure" tabindex="-1"><a class="header-anchor" href="#packer-failure" aria-hidden="true">#</a> Packer failure</h3><p>if you have not done any changes to any of the plugins, then you can remove Packer&#39;s package root completely.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">LUNARVIM_RUNTIME_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${LUNARVIM_RUNTIME_DIR<span class="token operator">:-</span>$HOME<span class="token operator">/</span>.local<span class="token operator">/</span>share<span class="token operator">/</span>lunarvim}</span>&quot;</span>
<span class="token function">rm</span> -rf <span class="token string">&quot;<span class="token variable">$LUNARVIM_RUNTIME_DIR</span>/site/pack/packer&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>now open <code>lvim</code>, you&#39;ll see a lot of errors about all the plugins missing, but running <code>:LvimSyncCorePlugins</code> should fix them all.</p><h2 id="lunarvim-is-slow" tabindex="-1"><a class="header-anchor" href="#lunarvim-is-slow" aria-hidden="true">#</a> LunarVim is slow!</h2><h3 id="are-you-using-fish" tabindex="-1"><a class="header-anchor" href="#are-you-using-fish" aria-hidden="true">#</a> are you using <code>fish</code>?</h3><blockquote><p>First of all, it is not recommended to set shell to fish in vim. Plenty of vim addons execute fish-incompatible shellscript, so setting it to /bin/sh is typically better, especially if you have no good reason to set it to fish.</p></blockquote><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>shell <span class="token operator">=</span> <span class="token string">&quot;/bin/sh&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14),C=s("See "),E={href:"https://github.com/fish-shell/fish-shell/issues/7004",target:"_blank",rel:"noopener noreferrer"},A=s("fish-shell/fish-shell#7004"),$=s(" and "),D=n("code",null,":h 'shell'",-1),P=s(" for more info."),j=n("h2",{id:"language-server-xxx-does-not-start-for-me",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#language-server-xxx-does-not-start-for-me","aria-hidden":"true"},"#"),s(" Language server XXX does not start for me!")],-1),S=n("h3",{id:"is-it-overriden",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#is-it-overriden","aria-hidden":"true"},"#"),s(" is it overriden?")],-1),B=s("This could be due to the fact that the server is "),F=s("overridden"),X=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">--- is it in this list?</span>
<span class="token punctuation">:</span>lua <span class="token function">print</span><span class="token punctuation">(</span>vim<span class="token punctuation">.</span><span class="token function">inspect</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If that&#39;s the case, then you need to either remove it from that list and re-run <code>:LvimCacheReset</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span><span class="token function">tbl_map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span>
  <span class="token keyword">return</span> server <span class="token operator">~=</span> <span class="token string">&quot;emmet_ls&quot;</span>
<span class="token keyword">end</span><span class="token punctuation">,</span> lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,3),z=s("or set it up "),G=s("manually"),H=s("."),J={id:"is-it-supported-by-nvim-lsp-installer",tabindex:"-1"},O=n("a",{class:"header-anchor",href:"#is-it-supported-by-nvim-lsp-installer","aria-hidden":"true"},"#",-1),Y=s(" is it supported by "),K={href:"https://github.com/williamboman/nvim-lsp-installer",target:"_blank",rel:"noopener noreferrer"},Q=s("nvim-lsp-installer"),W=s("?"),Z=n("p",null,[s("Any server that does not show up in "),n("code",null,"LspInstallInfo"),s(" needs to be installed manually.")],-1),ss=n("h3",{id:"is-it-at-least-showing-up-in-lspinfo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#is-it-at-least-showing-up-in-lspinfo","aria-hidden":"true"},"#"),s(" is it at least showing up in "),n("code",null,":LspInfo"),s("?")],-1),ns=s("Check out the tips for "),as={href:"https://github.com/neovim/nvim-lspconfig#debugging",target:"_blank",rel:"noopener noreferrer"},es=s("debugging nvim-lspconfig"),ts=s("."),os=n("h2",{id:"too-many-language-servers-are-starting-at-once",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#too-many-language-servers-are-starting-at-once","aria-hidden":"true"},"#"),s(" Too many language servers are starting at once!")],-1),is=s("Are any of these servers "),ls=s("overridden"),rs=s(" by default?"),cs=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>lua <span class="token function">print</span><span class="token punctuation">(</span>vim<span class="token punctuation">.</span><span class="token function">inspect</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp.config&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>override<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,1),ps=s("If they are then you are using the syntax prior to "),us={href:"https://github.com/LunarVim/LunarVim/pull/1813",target:"_blank",rel:"noopener noreferrer"},ds=s("LunarVim#1813"),hs=s("."),ms=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- this is the correct syntax since 3dd60bd</span>
vim<span class="token punctuation">.</span><span class="token function">list_extend</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>override<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;jsonls&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- this the correct syntax since 198577a</span>
vim<span class="token punctuation">.</span><span class="token function">list_extend</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_configuration<span class="token punctuation">.</span>skipped_servers<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;jsonls&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,2);function ks(_s,bs){const e=l("ExternalLinkIcon"),o=l("RouterLink");return r(),c(p,null,[h,n("p",null,[m,n("a",k,[_,a(e)]),b]),g,v,n("p",null,[f,y,x,n("a",I,[w,a(e)]),L]),n("p",null,[R,n("a",q,[M,a(e)]),N,V,U]),T,n("p",null,[C,n("a",E,[A,a(e)]),$,D,P]),j,S,n("p",null,[B,a(o,{to:"/languages/#server-override"},{default:i(()=>[F]),_:1})]),X,n("p",null,[z,a(o,{to:"/languages/#server-setup"},{default:i(()=>[G]),_:1}),H]),n("h3",J,[O,Y,n("a",K,[Q,a(e)]),W]),Z,ss,n("p",null,[ns,n("a",as,[es,a(e)]),ts]),os,n("p",null,[is,a(o,{to:"/languages/#server-override"},{default:i(()=>[ls]),_:1}),rs]),cs,n("p",null,[ps,n("a",us,[ds,a(e)]),hs]),ms],64)}var fs=u(d,[["render",ks]]);export{fs as default};
