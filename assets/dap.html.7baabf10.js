import{r as p,o as e,c as t,a as n,b as o,F as c,d as s,e as r}from"./app.91c9ffb2.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"configuring-a-debugger",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuring-a-debugger","aria-hidden":"true"},"#"),s(" Configuring a debugger")],-1),k=s("LunarVim uses nvim-dap for debugging. To set up your particular debugger, look here: "),d={href:"https://github.com/mfussenegger/nvim-dap/wiki/Debug-Adapter-installation",target:"_blank",rel:"noopener noreferrer"},b=s("link"),m=r(`<h2 id="cpp" tabindex="-1"><a class="header-anchor" href="#cpp" aria-hidden="true">#</a> cpp</h2><p>To set up a debug adapter for cpp, place this in your <code>config.lua</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>dap<span class="token punctuation">.</span>on_config_done <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>dap<span class="token punctuation">)</span>
    dap<span class="token punctuation">.</span>adapters<span class="token punctuation">.</span>lldb <span class="token operator">=</span> <span class="token punctuation">{</span>
      type <span class="token operator">=</span> <span class="token string">&#39;executable&#39;</span><span class="token punctuation">,</span>
      command <span class="token operator">=</span> <span class="token string">&#39;/usr/bin/lldb-vscode&#39;</span><span class="token punctuation">,</span>
      name <span class="token operator">=</span> <span class="token string">&quot;lldb&quot;</span>
    <span class="token punctuation">}</span>

    dap<span class="token punctuation">.</span>configurations<span class="token punctuation">.</span>cpp <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
            name <span class="token operator">=</span> <span class="token string">&quot;Launch&quot;</span><span class="token punctuation">,</span>
            type <span class="token operator">=</span> <span class="token string">&quot;lldb&quot;</span><span class="token punctuation">,</span>
            request <span class="token operator">=</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
            program <span class="token operator">=</span> <span class="token string">&quot;\${workspaceFolder}/build/binary_name&quot;</span><span class="token punctuation">,</span>
            cwd <span class="token operator">=</span> <span class="token string">&quot;\${workspaceFolder}/build&quot;</span><span class="token punctuation">,</span>
            stopOnEntry <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span>
            args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            runInTerminal <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    dap<span class="token punctuation">.</span>configurations<span class="token punctuation">.</span>c <span class="token operator">=</span> dap<span class="token punctuation">.</span>configurations<span class="token punctuation">.</span>cpp
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,3);function g(h,_){const a=p("ExternalLinkIcon");return e(),t(c,null,[i,n("p",null,[k,n("a",d,[b,o(a)])]),m],64)}var v=l(u,[["render",g]]);export{v as default};
