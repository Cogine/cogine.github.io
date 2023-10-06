"use strict";(self.webpackChunkrealityworld=self.webpackChunkrealityworld||[]).push([[2863],{4137:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,m=u["".concat(p,".").concat(h)]||u[h]||f[h]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1005:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),o=(t(7294),t(4137));const a={},i=void 0,s={type:"mdx",permalink:"/feature/chidori",source:"@site/src/pages/feature/chidori.mdx",frontMatter:{}},p=[],c={toc:p},l="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import aiohttp\nimport asyncio\nfrom typing import List, Optional\nimport json\nfrom chidori import Chidori, GraphBuilder\n\n\nclass Story:\n    def __init__(self, title: str, url: Optional[str], score: Optional[float]):\n        self.title = title\n        self.url = url\n        self.score = score\n\n\nHN_URL_TOP_STORIES = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"\n\n\nasync def fetch_story(session, id):\n    async with session.get(f"https://hacker-news.firebaseio.com/v0/item/{id}.json?print=pretty") as response:\n        return await response.json()\n\n\nasync def fetch_hn() -> List[Story]:\n    async with aiohttp.ClientSession() as session:\n        async with session.get(HN_URL_TOP_STORIES) as response:\n            story_ids = await response.json()\n\n        tasks = []\n        for id in story_ids[:30]:  # Limit to 30 stories\n            tasks.append(fetch_story(session, id))\n\n        stories = await asyncio.gather(*tasks)\n\n        stories_out = []\n        for story in stories:\n            story_dict = {k: story.get(k, None) for k in (\'title\', \'url\', \'score\')}\n            stories_out.append(Story(**story_dict))\n        return stories_out\n\n\n# ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n# Methods for fetching hacker news posts via api\n\nclass ChidoriWorker:\n    def __init__(self):\n        self.c = Chidori("0", "http://localhost:9800")\n\n    async def build_graph(self):\n        g = GraphBuilder()\n\n        # Create a custom node, we will implement our\n        # own handler for this node type\n        h = await g.custom_node(\n            name="FetchTopHN",\n            node_type_name="FetchTopHN",\n            output="{ output: String }"\n        )\n\n        # A prompt node, pulling in the value of the output from FetchTopHN\n        # and templating that into the prompt for GPT3.5\n        h_interpret = await g.prompt_node(\n            name="InterpretTheGroup",\n            template="""\n                Based on the following list of HackerNews threads, \n                filter this list to only launches of new AI projects: {{FetchTopHN.output}}\n            """\n        )\n        await h_interpret.run_when(g, h)\n\n        h_format_and_rank = await g.prompt_node(\n            name="FormatAndRank",\n            template="""\n                Format this list of new AI projects in markdown, ranking the most \n                interesting projects from most interesting to least. \n                \n                {{InterpretTheGroup.promptResult}}\n            """\n        )\n        await h_format_and_rank.run_when(g, h_interpret)\n\n        # Commit the graph, this pushes the configured graph\n        # to our durable execution runtime.\n        await g.commit(self.c, 0)\n\n    async def run(self):\n        # Construct the agent graph\n        await self.build_graph()\n\n        # Start graph execution from the root\n        await self.c.play(0, 0)\n\n        # Run the node execution loop\n        await self.c.run_custom_node_loop()\n\n\nasync def handle_fetch_hn(node_will_exec):\n    stories = await fetch_hn()\n    result = {"output": json.dumps([story.__dict__ for story in stories])}\n    return result\n\n\nasync def main():\n    w = ChidoriWorker()\n    await w.c.start_server(":memory:")\n    await w.c.register_custom_node_handle("FetchTopHN", handle_fetch_hn)\n    await w.run()\n\n\nif __name__ == "__main__":\n    asyncio.run(main())\n')))}u.isMDXComponent=!0}}]);