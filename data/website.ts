import { Friends } from './friend';

export interface Website {
  name: string;
  logo: string;
  desc: string;
  href: string;
  tags?: string[];
}

export interface WebsiteCategory {
  name: string;
  websites: Website[];
}

const friends: Website[] = Friends.map((f) => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  };
});

export const websiteData: WebsiteCategory[] = [
  {
    name: '友链👨‍💻',
    websites: friends,
  },
  {
    name: '推荐浏览🔥',
    websites: [
      {
        name: "稀土掘金",
        desc: "稀土掘金是一个技术博客平台，是程序员发布自己的技术文章、分享知识的地方",
        logo: "/img/website/juejin.png",
        href: "https://juejin.cn/",
      },
      {
        name: 'OSS Insight',
        desc: 'Open Source Software Insight',
        logo: 'https://vecta.io/nano',
        href: 'https://ossinsight.io/',
      },
      {
        name: 'Javascript Weekly',
        desc: 'A newsletter of JavaScript articles, news and cool projects',
        logo: '/img/website/javascript.svg',
        href: 'https://javascriptweekly.com/',
      },
      {
        name: 'State of JavaScript',
        desc: 'JavaScript 生态系统的年度开发人员调查',
        logo: '/img/website/stateofjs.svg',
        href: 'https://stateofjs.com',
      },
      {
        name: '前端食堂',
        desc: '周周尝鲜，人工筛选前端圈每周最新资讯。—— 由 童欧巴 创作',
        logo: '/img/website/zhubai.png',
        href: 'https://hungryturbo.zhubai.love/',
      }
    ],
  },
  {
    name: '站点🖥️',
    websites: [
      {
        name: "Developer Roadmap",
        desc: "Roadmap to becoming a web developer.",
        logo: "https://roadmap.sh/logo.svg",
        href: "https://roadmap.sh/",
      },
      {
        name: 'Shields.io',
        desc: '为你的开源项目生成高质量小徽章图标',
        logo: '/img/website/shields.png',
        href: 'https://shields.io/',
        tags: ['图标', '首页'],
      },
      {
        name: 'NGINX 配置',
        desc: '配置高性能、安全、稳定的NGINX服务器的最简单方法',
        logo: '/img/website/digitalocean.png',
        href: 'https://www.digitalocean.com/community/tools/nginx',
        tags: ['nginx'],
      },
      {
        name: 'BootCDN',
        desc: '稳定、快速、免费的前端开源项目 CDN 加速服务',
        logo: 'https://www.bootcdn.cn/assets/ico/favicon.ico',
        href: 'https://www.bootcdn.cn/',
        tags: ['cdn'],
      },
      {
        name: '那些免费的砖',
        desc: '发现免费可商用的资源',
        logo: 'https://img.thosefree.com/static/logo.png',
        href: 'https://www.thosefree.com/',
        tags: [''],
      },
      {
        name: '正则大全',
        desc: '🦕 常用正则大全, 支持web / vscode / idea / Alfred Workflow多平台',
        logo: '/img/website/any-rule.ico',
        href: 'https://any-rule.vercel.app/',
        tags: [''],
      },
    ],
  },
  {
    name: '文档📘',
    websites: [
      {
        name: 'MDN',
        desc: '从2005年开始记录网络技术，包括 CSS、 HTML 和 JavaScript。',
        logo: '/img/website/mdn.png',
        href: 'https://developer.mozilla.org/zh-CN/',
        tags: ['Css', '教程'],
      },
      {
        name: 'ES6 入门教程',
        desc: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性',
        logo: '/img/website/es6.png',
        href: 'https://es6.ruanyifeng.com/',
        tags: ['文档'],
      },
      {
        name: '深入理解 TypeScript',
        desc: '《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老鸟，它都将适应你',
        logo: 'https://jkchao.github.io//typescript-book-chinese/logo.png',
        href: 'https://jkchao.github.io/typescript-book-chinese/',
        tags: ['文档'],
      },
      {
        name: 'Rust语言圣经',
        desc: '一份高质量 Rust 教程',
        logo: '/img/website/rust.svg',
        href: 'https://course.rs',
        tags: ['文档'],
      },
    ],
  },
  {
    name: '工具🛠️',
    websites: [
      {
        name: '在线工具',
        desc: '在线工具,开发人员工具,代码格式化、压缩、加密、解密,下载链接转换,ico图标制作,字帖生成',
        logo: 'https://tool.lu/favicon.ico',
        href: 'https://tool.lu/',
        tags: ['工具'],
      },
      {
        name: '菜鸟工具',
        desc: '菜鸟工具，为开发设计人员提供在线工具，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具',
        logo: '/img/website/runoob.png',
        href: 'https://c.runoob.com/',
        tags: ['工具'],
      },
      {
        name: 'ProcessOn',
        desc: '免费在线流程图思维导图',
        logo: 'https://processon.com/favicon.ico',
        href: 'https://processon.com/',
        tags: ['工具', '思维导图'],
      },
      {
        name: 'Terminal Gif Maker',
        desc: '在线生成 Terminal GIF',
        logo: '/img/website/favicon.ico',
        href: 'https://www.terminalgif.com',
        tags: [],
      },
      {
        name: 'AST Explorer',
        desc: '一个 Web 工具，用于探索由各种解析器生成的 AST 语法树',
        logo: 'https://astexplorer.net/favicon.png',
        href: 'https://astexplorer.net/',
        tags: ['工具', '格式转换'],
      },
      {
        name: 'transform',
        desc: '各类数据格式与对象转换',
        logo: 'https://transform.tools/static/favicon.png',
        href: 'https://transform.tools',
        tags: ['工具', '格式转换'],
      },
      {
        name: 'Hoppscotch',
        desc: '开源 API 开发生态系统',
        logo: '/img/website/hoppscotch.png',
        href: 'https://hoppscotch.io/',
        tags: ['api'],
      },
      {
        name: 'JsonT.run',
        desc: '一个简洁的在线 JSON 解析器',
        logo: 'https://www.jsont.run/favicon.ico',
        href: 'https://www.jsont.run/',
        tags: ['工具'],
      },
      {
        name: 'Apifox',
        desc: 'API 文档、API 调试、API Mock、API 自动化测试',
        logo: '/img/website/apifox.png',
        href: 'https://www.apifox.cn/',
        tags: ['工具'],
      },
      {
        name: '迅捷PDF转换器',
        desc: '在线电子书格式转换PDF',
        logo: 'https://app.xunjiepdf.com/favicon.ico',
        href: 'https://app.xunjiepdf.com/eb2pdf/?zhljj01/',
        tags: ['工具'],
      },
      {
        name: 'DeepL 翻译',
        desc: '号称全世界最准的翻译',
        logo: 'https://static.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg',
        href: 'https://www.deepl.com/translator/',
        tags: ['工具'],
      },
      {
        name: 'GeoGebra',
        desc: '数学教学软件，一个计算器套件',
        logo: 'https://www.geogebra.org/favicon.ico',
        href: 'https://www.geogebra.org/',
        tags: ['工具'],
      },
    ],
  },
  {
    name: '代码托管',
    websites: [
      {
        name: 'GitHub',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', '代码托管'],
      },
      {
        name: 'Gitee',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        logo: '/img/website/gitee.ico',
        href: 'https://gitee.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Gitlab',
        desc: '更快地交付安全代码，部署到任何云，并推动业务成果',
        logo: 'https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png?width=64',
        href: 'https://gitlab.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Gitea',
        desc: 'Gitea 是一个开源社区驱动的轻量级代码托管解决方案，后端采用 Go 编写，采用 MIT 许可证.',
        logo: 'https://gitea.io/images/favicon.png',
        href: 'https://gitea.io/',
        tags: ['代码托管'],
      },
      {
        name: "Coding",
        desc: "提供一站式研发管理平台及云原生开发工具，让软件研发如同工业生产般简单高效，助力企业提升研发管理效能",
        logo: "/img/website/coding.png",
        href: "https://coding.net/",
        tags: ["代码托管"],
      },
    ],
  },
  {
    name: '网站托管',
    websites: [
      {
        name: 'Vercel',
        desc: 'Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合',
        logo: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
        href: 'https://vercel.com',
        tags: ['网站托管'],
      },
      {
        name: 'Netlify',
        desc: 'Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能',
        logo: 'https://www.netlify.com/v3/static/favicon/apple-touch-icon.png',
        href: 'https://www.netlify.com',
        tags: ['网站托管'],
      },
      {
        name: 'Coolify',
        desc: '一个开源和自我托管的 Heroku/Netlify 替代品',
        logo: '/img/website/coolify.png',
        href: 'https://coolify.io',
        tags: ['网站托管'],
      },
      {
        name: 'GitHub Codespace',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/codespaces',
        tags: ['网站托管'],
      },
      {
        name: 'railway',
        desc: '带上你的代码，剩下交给我们 ',
        logo: '/img/website/railway.png',
        href: 'https://railway.app/',
        tags: ['网站托管'],
      },

    ],
  },
  {
    name: '在线代码',
    websites: [
      {
        name: 'CodesandBox',
        desc: 'CodeSandbox是一个在线代码编辑器和原型工具，可以更快地创建和共享web应用程序',
        logo: 'https://codesandbox.io/favicon.ico',
        href: 'https://codesandbox.io/',
        tags: ['在线代码'],
      },
      {
        name: 'CodePen',
        desc: '是构建、测试和发现前端代码的最佳场所',
        logo: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
        href: 'https://codepen.io/',
        tags: ['在线代码'],
      },
      {
        name: 'Stackblitz',
        desc: 'Stackblitz在流程中保持即时的开发体验。没有更多的小时储存/拉/安装本地-只需点击，并开始编码',
        logo: '/img/website/stackblitz.png',
        href: 'https://stackblitz.com/',
        tags: ['在线代码'],
      },
      {
        name: 'vscode.dev',
        desc: 'vscode官方提供在线Web版vscode代码编写网站',
        logo: 'https://vscode.dev/static/stable/favicon.ico',
        href: 'https://vscode.dev/',
        tags: ['在线代码'],
      },
      {
        name: 'Sandpack',
        desc: '用于创建实时运行的代码编辑经验',
        logo: 'https://sandpack.codesandbox.io/favicon.ico',
        href: 'https://sandpack.codesandbox.io/',
        tags: ['在线代码'],
      },
    ],
  },
  {
    name: 'Vue',
    websites: [
      {
        name: 'Vue.js',
        desc: '渐进式 JavaScript 框架',
        logo: 'https://vuejs.org/logo.svg',
        href: 'https://vuejs.org',
        tags: ['前端', 'Vue', '框架'],
      },
      {
        name: 'Nuxt',
        desc: '使用 Nuxt 自信地构建您的下一个 Vue.js 应用程序。使 Web 开发简单而强大。',
        logo: '/img/website/nuxt.svg',
        href: 'https://nuxt.com/',
        tags: ['前端', 'Vue', '文档', '框架'],
      },
      {
        name: 'Pinia',
        desc: '您将会喜欢使用的 Vue 状态管理',
        logo: 'https://pinia.vuejs.org/logo.svg',
        href: 'https://pinia.vuejs.org/',
        tags: ['前端', 'Vue', '文档', '框架'],
      },
      {
        name: 'VueUse',
        desc: '基本 Vue 合成实用程序的集合',
        logo: 'https://vueuse.org/favicon.ico',
        href: 'https://vueuse.org/',
        tags: ['前端', 'Vue', '文档', '框架'],
      },
      {
        name: 'Vitest',
        desc: '一个 Vite 原生单元测试框架。它很快！',
        logo: 'https://vitest.dev/favicon.ico',
        href: 'https://cn.vitest.dev/',
        tags: ['前端', 'Vue', '框架'],
      },
    ],
  },
  {
    name: 'React',
    websites: [
      {
        name: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        logo: 'https://reactjs.org/favicon.ico',
        href: 'https://reactjs.org',
        tags: ['前端', 'React', '框架'],
      },
      {
        name: 'Next.js',
        desc: 'Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置',
        logo: 'https://nextjs.org/static/favicon/favicon.ico',
        href: 'https://nextjs.org/',
        tags: ['前端', 'React', '框架'],
      },
      {
        name: 'Remix',
        desc: 'Remix 是一个全栈 Web 框架，可让您专注于用户界面，并通过 Web 标准进行回溯，以提供快速、流畅且有弹性的用户体验',
        logo: 'https://remix.run/favicon-light.1.png',
        href: 'https://remix.run',
        tags: ['前端', 'React', '框架'],
      },
      {
        name: 'Ant Design Pro',
        desc: '开箱即用的中台前端/设计解决方案',
        logo: 'https://pro.ant.design/favicon.png',
        href: 'https://pro.ant.design',
        tags: ['前端', 'React', '后台', '项目'],
      },
      {
        name: 'react-use',
        desc: '一个强大的 React Hooks 库',
        logo: 'https://reactjs.org/favicon.ico',
        href: 'https://github.com/streamich/react-use',
        tags: ['前端', 'React', '脚手架'],
      },
      {
        name: 'ahooks',
        desc: '一个高质量和可靠的 React Hooks 库',
        logo: 'https://ahooks.js.org/simple-logo.svg',
        href: 'https://ahooks.js.org/',
        tags: ['前端', 'React', '脚手架'],
      },
      {
        name: 'SWR',
        desc: '用于数据请求的 React Hooks 库',
        logo: '/img/website/swr.png',
        href: 'https://swr.vercel.app/',
        tags: ['前端', 'React', '脚手架'],
      },
      {
        name: 'react-spring',
        desc: '通过简单的动画基元使您的组件栩栩如生',
        logo: 'https://react-spring.dev/favicon.ico',
        href: 'https://react-spring.dev/',
        tags: ['前端', 'React', '动画'],
      },
      {
        name: 'UmiJS',
        desc: '用 Umi 构建你的下一个应用，带给你简单而愉悦的 Web 开发体验',
        logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        href: 'https://umijs.org',
        tags: ['前端', 'React', '脚手架'],
      },
    ],
  },
  {
    name: 'CSS',
    websites: [
      {
        name: 'Bootstrap',
        desc: 'Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和 mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于 Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站',
        logo: 'https://img.kuizuo.cn/20210907055816.png',
        href: 'https://v5.bootcss.com/',
        tags: ['Css', '框架'],
      },
      {
        name: 'w3schools Css 教程',
        desc: 'w3schools 从基础到高级的CSS教程',
        logo: 'https://www.w3schools.com/favicon.ico',
        href: 'https://www.w3schools.com/css',
        tags: ['Css', '样式'],
      },
      {
        name: 'CSS-Inspiration',
        desc: 'CSS灵感',
        logo: '/img/website/css-inspiration.png',
        href: 'https://csscoco.com/inspiration',
        tags: ['Css', '样式'],
      },
      {
        name: 'CSS常用样式',
        desc: 'CSS常用样式',
        logo: 'https://tse1-mm.cn.bing.net/th?id=OIP-C.EgSPriuEnAtlIWJV8R_E1QHaGs&w=107&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        href: 'https://github.com/QiShaoXuan/css_tricks',
        tags: ['Css', '样式'],
      },
      {
        name: 'CSSFX',
        desc: '一个精心制作的集合设计的重点是流动性，简单性和易用性。使用最小标记的 CSS 支持',
        logo: '/img/website/cssfx.png',
        href: 'https://cssfx.netlify.app/',
        tags: ['Css', '样式'],
      },
      {
        name: 'TailwindCSS',
        desc: 'Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计',
        logo: 'https://www.tailwindcss.cn/favicon-32x32.png',
        href: 'https://www.tailwindcss.cn',
        tags: ['Css', '框架'],
      },
      {
        name: 'WindiCSS',
        desc: 'Windi CSS 是下一代工具优先的 CSS 框架',
        logo: 'https://windicss.org/assets/logo.svg',
        href: 'https://windicss.org',
        tags: ['Css', '框架'],
      },
      {
        name: 'Twind',
        desc: '现存最小、最快、功能最齐全的完整 Tailwind-in-JS 解决方案',
        logo: '/img/website/twind.svg',
        href: 'https://github.com/tw-in-js/twind',
        tags: ['Css', '框架'],
      },
      {
        name: 'UnoCSS',
        desc: '即时按需原子 CSS 引擎',
        logo: 'https://uno.antfu.me//favicon.svg',
        href: 'https://uno.antfu.me/',
        tags: ['Css', '框架'],
      },
      {
        name: 'NES.css',
        desc: '一个像素风格的CSS框架',
        logo: 'https://nostalgic-css.github.io/NES.css/favicon.png',
        href: 'https://nostalgic-css.github.io/NES.css/',
        tags: ['Css', '框架'],
      },
      {
        name: 'clay.css',
        desc: 'claymorphism 泥陶态风格CSS',
        logo: 'https://codeadrian.github.io/clay.css/apple-touch-icon.png',
        href: 'https://codeadrian.github.io/clay.css/',
        tags: ['Css', '框架'],
      },
      {
        name: 'loading.io',
        desc: 'Animation Made Easy',
        logo: '/img/website/loading.ico',
        href: 'https://loading.io/',
        tags: ['Css'],
      },
      {
        name: '神奇UI样式',
        desc: '我们赋予任何人创建、分享和使用用 CSS 和 HTML 制作的漂亮自定义元素的权力。',
        logo: '/img/website/uiverse.png',
        href: 'https://uiverse.io',
        tags: ['Css'],
      },
    ],
  },
  {
    name: '组件库',
    websites: [
      {
        name: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        logo: 'https://element-plus.gitee.io/images/element-plus-logo-small.svg',
        href: 'https://element-plus.gitee.io/',
        tags: ['前端', 'Vue', '组件库'],
      },
      {
        name: 'Naive UI',
        desc: '一个 Vue 3 组件库比较完整，主题可调，使用 TypeScript，快 有点意思',
        logo: '/img/website/naiveUI.svg',
        href: 'https://www.naiveui.com/',
        tags: ['组件库', 'vue'],
      },
      {
        name: 'Ant Design',
        desc: '一套企业级 UI设计语言和 React 组件库',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        href: 'https://ant.design',
        tags: ['前端', 'React', '组件库'],
      },
      {
        name: 'TDesign',
        desc: 'TDesign 是腾讯各业务团队在服务业务过程中沉淀的一套企业级设计体系',
        logo: 'https://tdesign.tencent.com/favicon.ico',
        href: 'https://tdesign.tencent.com/',
        tags: ['组件库', 'react'],
      },
      {
        name: 'Arco Design',
        desc: '字节跳动出品的企业级设计系统',
        logo: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
        href: 'https://arco.design/',
        tags: ['组件库', 'react'],
      },
      {
        name: 'Vuetify',
        desc: 'Vuetify 是一个 Vue UI 库，包含手工制作的精美材料组件。不需要设计技能 - 创建令人惊叹的应用程序所需的一切都触手可及',
        logo: 'https://vuetify.cn/favicon.ico',
        href: 'https://vuetify.cn/',
        tags: ['组件库', 'react'],
      },
      {
        name: 'MUI',
        desc: '当下流行的 React UI 框架',
        logo: 'https://mui.com/static/favicon.ico',
        href: 'https://mui.com',
        tags: ['前端', 'React', '组件库'],
      },
      {
        name: 'VbenAdmin',
        desc: 'Vben是一个基于Vue3、Vite、TypeScript等最新技术栈开发的后台管理框架',
        logo: '/img/website/vben-admin.png',
        href: 'https://vvbin.cn/doc-next/',
        tags: ['前端', 'Vue', '后台', '项目'],
      }
    ]
  },
  {
    name: 'Frontend',
    websites: [
      {
        name: "Component party",
        desc: "前端框架开Party🎉，Web 组件 JS 框架通过其语法和特性进行概述",
        logo: "/img/website/component party.svg",
        href: "https://component-party.dev/",
        tags: ["前端", "css", "动画"],
      },
      {
        name: 'Lodash',
        desc: '一个 JavaScript 的实用工具库, 表现一致性, 模块化, 高性能, 以及可扩展',
        logo: 'https://lodash.com/icons/favicon-32x32.png',
        href: 'https://lodash.net',
        tags: ['Nodejs'],
      },
      {
        name: 'WebAssembly',
        desc: 'wasm 是一个可移植、体积小、加载快并且兼容 Web 的全新格式',
        logo: 'https://www.wasm.com.cn/favicon.ico',
        href: 'https://www.wasm.com.cn',
        tags: ['Nodejs'],
      },
      {
        name: "Greensock",
        desc: "超强大h5动画库",
        logo: "https://greensock.com/favicon.ico",
        href: "https://greensock.com/docs/",
        tags: ["前端", "css", "动画"],
      },
      {
        name: "Threejs",
        desc: "强大的3D-Js库",
        logo: "https://threejs.org/favicon.ico",
        href: "https://threejs.org/",
        tags: ["前端", "JavaScript", "3D"],
      },
      {
        name: 'Jest',
        desc: 'Jest 是一个令人愉快的 JavaScript 测试框架，注重简单性。',
        logo: '/img/website/jest.png',
        href: 'https://jestjs.io/',
        tags: ['自动化测试'],
      },
      {
        name: 'Cypress',
        desc: '对任何在浏览器中运行的东西进行快速、简单和可靠的测试。',
        logo: '/img/website/cypress.png',
        href: 'https://www.cypress.io/',
        tags: ['自动化测试'],
      },
      {
        name: 'Playwright',
        desc: 'Playwright 为现代网络应用程序提供了可靠的端到端测试。',
        logo: '/img/website/playwright.svg',
        href: 'https://playwright.dev/',
        tags: ['自动化测试'],
      },
    ]
  },
  {
    name: 'Node/Deno',
    websites: [
      {
        name: 'Node',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时',
        logo: 'https://nodejs.org/static/images/favicons/apple-touch-icon.png',
        href: 'http://nodejs.cn/',
        tags: ['后端', 'Nodejs', '文档'],
      },
      {
        name: 'Deno',
        desc: '一个现代的JavaScript和TypeScript运行时',
        logo: 'https://deno.land/logo.svg',
        href: 'https://bun.sh/',
        tags: ['Nodejs', 'Deno', 'JavaScript', 'TypeScript'],
      },
      {
        name: 'Bun',
        desc: 'Bun 是一个快速的一体化 JavaScript 运行时',
        logo: '/img/website/bun.svg',
        href: 'https://bun.sh',
        tags: ['Nodejs', 'Deno', 'JavaScript', 'TypeScript'],
      },
      {
        name: 'NPM',
        desc: 'NPM是世界上最大的包管理器',
        logo: 'https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png',
        href: 'https://www.npmjs.com',
        tags: ['Nodejs', '包管理', '文档'],
      },
      {
        name: 'Yarn',
        desc: 'Yarn 是一个软件包管理器，还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos），无论是业余爱好者还是企业用户，Yarn 都能满足你的需求',
        logo: 'https://www.yarnpkg.cn/favicon-32x32.png',
        href: 'https://www.yarnpkg.cn',
        tags: ['Nodejs', '包管理', '文档'],
      },
      {
        name: 'Pnpm',
        desc: '速度快、节省磁盘空间的软件包管理器',
        logo: 'https://www.pnpm.cn/img/favicon.png',
        href: 'https://pnpm.io',
        tags: ['Nodejs', '包管理', '文档'],
      },
      {
        name: 'Node.js技术栈',
        desc: '“Nodejs技术栈” 是作者 @五月君 从事 Node.js 开发以来的学习历程，希望这些分享能帮助到正在学习、使用 Node.js 的朋友们',
        logo: 'https://nodejsred.oss-cn-shanghai.aliyuncs.com/nodejs_roadmap-logo.jpeg?x-oss-process=style/may',
        href: 'https://www.nodejs.red/',
        tags: ['Nodejs', '笔记', '教程'],
      },
      {
        name: 'Axios',
        desc: 'Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js',
        logo: '/img/website/axios.ico',
        href: 'https://axios-http.cn/',
        tags: ['Nodejs', 'HTTP'],
      },
      {
        name: 'Expressjs',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        logo: 'https://www.expressjs.com.cn/images/favicon.png',
        href: 'https://www.expressjs.com.cn/',
        tags: ['Nodejs', '后端', '框架'],
      },
      {
        name: 'Nest.js',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        logo: 'https://docs.nestjs.cn/_media/icon.svg',
        href: 'https://docs.nestjs.cn/',
        tags: ['后端', 'Nodejs', '框架'],
      },
      {
        name: 'Socket.io',
        desc: 'Socket.IO 是一个可以在浏览器与服务器之间实现实时、双向、基于事件的通信的工具库',
        logo: 'https://socket.io/images/favicon.png',
        href: 'https://socketio.bootcss.com',
        tags: ['Nodejs', 'socket'],
      },
      {
        name: 'Strapi',
        desc: 'Socket.IO 是一个可以在浏览器与服务器之间实现实时、双向、基于事件的通信的工具库',
        logo: '/img/website/strapi.png',
        href: 'https://strapi.io/',
        tags: ['Nodejs', 'CMS'],
      },
      {
        name: 'TypeORM',
        desc: 'TypeORM 是一个 ORM 框架，它可以运行在 NodeJS、Browser、Cordova、PhoneGap、Ionic、React Native、Expo 和 Electron 平台上，可以与 TypeScript 和 JavaScript (ES5,ES6,ES7,ES8)一起使用',
        logo: '/img/website/typeorm.ico',
        href: 'https://typeorm.bootcss.com',
        tags: ['Nodejs', 'ORM'],
      },
      {
        name: 'Prisma',
        desc: 'Prisma 下一代 Node.js 和 TypeScript 的ORM框架',
        logo: '/img/website/prisma.png',
        href: 'https://prisma.io/',
        tags: ['Nodejs', 'ORM'],
      },
      {
        name: 'GraphQL',
        desc: 'GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时',
        logo: '/img/website/graphQL.svg',
        href: 'https://graphql.cn',
        tags: [],
      },
      {
        name: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        logo: 'https://echarts.apache.org/zh/images/favicon.png',
        href: 'https://echarts.apache.org/',
        tags: ['图表', '可视化'],
      },
      {
        name: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案,让数据栩栩如生',
        logo: '/img/website/antv.png',
        href: 'https://antv.vision/',
        tags: ['图表', '可视化'],
      },
    ],
  },
  {
    name: '构建工具',
    websites: [
      {
        name: 'Webpack',
        desc: 'webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle',
        logo: '/img/website/webpack.png',
        href: 'https://www.webpackjs.com',
        tags: ['构建工具'],
      },
      {
        name: 'Rollup.js',
        desc: 'Rollup 是 JavaScript 的模块打包器，它将小段代码编译成更大、更复杂的代码，例如库或应用程序',
        logo: 'https://rollupjs.org/favicon.png',
        href: 'https://rollupjs.org',
        tags: ['构建工具'],
      },
      {
        name: 'Vite',
        desc: '下一代的前端工具链，为开发提供极速响应',
        logo: 'https://cn.vitejs.dev/logo.svg',
        href: 'https://cn.vitejs.dev',
        tags: ['构建工具'],
      },
      {
        name: 'Turborepo',
        desc: 'Turborepo 是一个用于 JavaScript 和 TypeScript 代码库的高性能构建系统。',
        logo: '/img/website/turborepo.svg',
        href: 'https://turbo.build/repo',
        tags: ['构建工具'],
      },
      {
        name: 'Turbopack',
        desc: 'Turbopack 是一个用 Rust 编写的针对 JavaScript 和 TypeScript 优化的增量式捆绑包。',
        logo: '/img/website/turbopack.svg',
        href: 'https://turbo.build/pack',
        tags: ['构建工具'],
      },
    ]
  },
  {
    name: '设计',
    websites: [
      {
        name: 'Mastergo',
        desc: '面向团队的专业 UI/UX 设计工具，多人同时编辑、随时在线评审、设计一键交付，让想法更快实现',
        logo: 'https://mastergo.com/favicon.ico',
        href: 'https://mastergo.com/',
        tags: ['设计'],
      },
      {
        name: '即时设计',
        desc: '可云端编辑的专业级 UI 设计工具，为中国设计师量身打造，Windows 也能用的「协作版 Sketch」',
        logo: 'https://img.js.design/assets/webImg/favicon.ico',
        href: 'https://js.design/',
        tags: ['设计'],
      },
      {
        name: 'Figma',
        desc: 'Figma 是为 UI 设计而生的设计工具，除了有和 Sketch 一样基本的操作和功能，还有许多专为 UI 设计而生的强大功能。',
        logo: '/img/website/figma.png',
        href: 'https://www.figma.com/',
        tags: ['设计'],
      },
      {
        name: 'Pixso',
        desc: '一站式完成原型、设计、交互与交付，为数字化团队协作提效',
        logo: 'https://cms.pixso.cn/images/logo.svg',
        href: 'https://pixso.cn/',
        tags: ['设计'],
      },

    ],
  },
  {
    name: '文字&图标',
    websites: [
      {
        name: 'iconify',
        desc: '数千个图标，一个统一的框架',
        logo: 'https://icon-sets.iconify.design/favicon.ico',
        href: 'https://icon-sets.iconify.design/',
        tags: ['图标'],
      },
      {
        name: 'icones',
        desc: 'Icon Explorer with Instant searching, powered by Iconify',
        logo: 'https://icones.js.org/favicon.svg',
        href: 'https://icones.js.org/',
        tags: ['图标'],
      },
      {
        name: 'iconfont',
        desc: 'iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        logo: 'https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg',
        href: 'https://www.iconfont.cn/',
        tags: ['图标'],
      },
      {
        name: 'feathericons',
        desc: '简单美丽的开源图标',
        logo: 'https://feathericons.com/favicon.ico',
        href: 'https://feathericons.com/',
        tags: ['图标'],
      },
      {
        name: 'undraw',
        desc: '一个不断更新的设计项目与美丽的SVG图像，使用完全免费',
        logo: 'https://undraw.co/apple-touch-icon.png',
        href: 'https://undraw.co/',
        tags: ['插画', 'svg'],
      },
      {
        name: 'igoutu',
        desc: '图标、插图、照片、音乐和设计工具',
        logo: '/img/website/igoutu.png',
        href: 'https://igoutu.cn/',
        tags: ['插画', 'svg'],
      },
      {
        name: 'Emojiall',
        desc: 'Emoji表情大全',
        logo: 'https://www.emojiall.com/apple-touch-icon.png',
        href: 'https://www.emojiall.com/zh-hans',
        tags: ['图标', 'emoji'],
      },
      {
        name: 'EmojiXD',
        desc: 'Emoji百科全书',
        logo: 'https://emojixd.com/favicon.ico',
        href: 'https://emojixd.com/',
        tags: ['图标', 'emoji'],
      },
      {
        name: '渐变色网站',
        desc: '数百万个自动生成的渐变的网站',
        logo: 'https://gradihunt.com/favicon.ico',
        href: 'https://gradihunt.com/',
        tags: ['配色', '背景'],
      },
      {
        name: '谷歌字体',
        desc: '一个生成渐变色背景的网站',
        logo: '/img/website/google_fonts.ico',
        href: 'https://googlefonts.cn/',
        tags: ['字体'],
      },
      {
        name: 'Typing SVG',
        desc: '一个动态生成的可自定义 SVG 打字效果',
        logo: '/img/website/typing-svg.png',
        href: 'https://readme-typing-svg.herokuapp.com/demo/',
        tags: ['字体'],
      },
      {
        name: 'Hitokoto - 一言',
        desc: '随机分享一句话',
        logo: 'https://hitokoto.cn/favicon.ico',
        href: 'https://hitokoto.cn/',
        tags: ['文字'],
      },
      {
        name: '一句',
        desc: '汇聚有料文字',
        logo: 'http://yijuzhan.com/favicon.ico',
        href: 'http://yijuzhan.com/',
        tags: ['文字'],
      },
      {
        name: '今日诗句',
        desc: '每次返回一句诗词',
        logo: 'https://www.jinrishici.com/img/icon-small.png',
        href: 'https://www.jinrishici.com/',
        tags: ['文字'],
      },
    ],
  },
  {
    name: '跨平台',
    websites: [
      {
        name: 'Electron',
        desc: '使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序',
        logo: '/img/website/electron.ico',
        href: 'https://www.electronjs.org/',
        tags: ['跨平台', 'Nodejs'],
      },
      {
        name: 'Tauri',
        desc: 'Tauri是一个框架，用于为所有主要桌面平台构建小巧、快速的二进制文件',
        logo: 'https://tauri.app/meta/favicon-96x96.png',
        href: 'https://tauri.app/',
        tags: ['跨平台', 'Rust'],
      },
      {
        name: 'Flutter',
        desc: 'Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用',
        logo: 'https://flutter.cn/assets/images/cn/flutter-icon.png',
        href: 'https://flutter.cn/',
        tags: ['跨平台', 'Rust'],
      },
      {
        name: 'Uni-app',
        desc: 'uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台',
        logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png',
        href: 'https://uniapp.dcloud.io/',
        tags: ['Vue', '小程序'],
      },
      {
        name: 'Taro',
        desc: 'Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用',
        logo: '/img/website/taro.png',
        href: 'https://taro.jd.com',
        tags: ['前端', 'React', '小程序'],
      },
    ]
  },
  {
    name: '站点生成',
    websites: [
      {
        name: 'VitePress',
        desc: 'Vue 驱动并使用Vite构建的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vitepress.vuejs.org',
        tags: ['前端', 'Vue', '静态站点'],
      },
      {
        name: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vuepress.vuejs.org',
        tags: ['前端', 'Vue', '静态站点'],
      },
      {
        name: 'Docusaurus',
        desc: '快速构建以内容为核心的最佳网站',
        logo: '/img/website/docusaurus.svg',
        href: 'https://docusaurus.io',
        tags: ['前端', 'React', '静态站点'],
      },
      {
        name: 'Hexo',
        desc: '快速、简洁且高效的博客框架',
        logo: 'https://hexo.io/favicon.ico',
        href: 'https://hexo.io',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'GitBook',
        desc: 'GitBook帮助您为用户发布漂亮的文档，并集中您的团队的知识进行高级协作',
        logo: 'https://assets-global.website-files.com/600ead1452cf056d0e52dbed/6246d2036225eac4d74cff27_Favicon_Blue.png',
        href: 'https://www.gitbook.com/',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'Docsify',
        desc: 'docsify 可以快速帮你生成文档网站',
        logo: 'https://docsify.js.org/_media/icon.svg',
        href: 'https://docsify.js.org',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'WordPress',
        desc: 'WordPress是一款能让您建立出色网站、博客或应用程序的开源软件',
        logo: 'https://s.w.org/images/wmark.png',
        href: 'https://cn.wordpress.org/',
        tags: ['前端', '站点'],
      },
      {
        name: 'Halo',
        desc: '一款现代化的开源博客/CMS系统，值得一试',
        logo: 'https://halo.run/logo',
        href: 'https://halo.run/',
        tags: ['前端', '站点'],
      },
    ],
  },
  {
    name: 'Github',
    websites: [
      {
        name: 'Gitstar Ranking',
        desc: '针对用户、组织和存储库的非官方 GitHub 星级排名',
        logo: '/img/website/github.ico',
        href: 'https://gitstar-ranking.com/',
        tags: [],
      },
      {
        name: 'Metrics',
        desc: 'Create your own metrics',
        logo: '/img/website/github.ico',
        href: 'https://metrics.lecoq.io/',
        tags: [],
      },
      {
        name: 'Github主页 README 生成器',
        desc: '一个Github 个人主页 README 生成器',
        logo: '/img/website/github.ico',
        href: 'https://rahuldkjain.github.io/gh-profile-readme-generator/',
        tags: [],
      },
      {
        name: 'Github 统计生成器',
        desc: 'Github 在你的 README 中获取动态生成的 GitHub 统计信息！',
        logo: '/img/website/github.ico',
        href: 'https://github.com/anuraghazra/github-readme-stats',
        tags: [],
      },
    ],
  },
  {
    name: '音乐',
    websites: [
      {
        name: '音乐解锁',
        desc: '移除已购音乐的加密保护',
        logo: 'https://demo.unlock-music.dev/favicon.ico',
        href: 'https://demo.unlock-music.dev/',
        tags: ['音乐','工具'],
      },
    ]
  },
  {
    name: '学术',
    websites: [
      {
        name: '维普毕业论文管理系统',
        desc: '',
        logo: 'https://vgms.fanyu.com/favicon.ico',
        href: 'https://vgms.fanyu.com/',
        tags: ['学术'],
      },
    ]
  }
];
