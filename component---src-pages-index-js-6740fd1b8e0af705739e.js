(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{159:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t.n(n),l=t(0),i=t.n(l),c=t(167),o=t.n(c),s=t(166),u=t.n(s),m=(t(241),t(165)),p=t.n(m),d=t(183),f=t.n(d),h=function(e){var a=e.data;return i.a.createElement("div",{className:f.a.hero},i.a.createElement(p.a,{className:f.a.heroImage,alt:a.name,fluid:a.heroImage.fluid}),i.a.createElement("div",{className:f.a.heroDetails},i.a.createElement("h3",{className:f.a.heroHeadline},a.name),i.a.createElement("p",{className:f.a.heroTitle},a.title),i.a.createElement("p",null,a.shortBio.shortBio)))},E=t(163),g=t(164);t.d(a,"pageQuery",function(){return y});var v=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=o()(this,"props.data.site.siteMetadata.title"),a=o()(this,"props.data.allContentfulBlogPost.edges"),t=o()(this,"props.data.allContentfulPerson.edges")[0];return i.a.createElement(E.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(u.a,{title:e}),i.a.createElement(h,{data:t.node}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h2",{className:"section-headline"},"Recent articles"),i.a.createElement("ul",{className:"article-list"},a.map(function(e){var a=e.node;return i.a.createElement("li",{key:a.slug},i.a.createElement(g.a,{article:a}))})))))},a}(i.a.Component),y=(a.default=v,"2004276409")},160:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(5),i=t.n(l),c=t(40),o=t.n(c);t.d(a,"a",function(){return o.a});t(161),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},161:function(e,a,t){var n;e.exports=(n=t(162))&&n.default||n},162:function(e,a,t){"use strict";t.r(a);t(41);var n=t(0),r=t.n(n),l=t(5),i=t.n(l),c=t(64),o=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},163:function(e,a,t){"use strict";var n=t(8),r=t.n(n),l=t(0),i=t.n(l),c=t(160),o=(t(168),function(e){var a=e.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},a)}),s=t(169),u=t.n(s),m=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",{className:u.a.navigation},i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/"},"Markham Chinese Alliance Church - 麥咸華人宣道會")),i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/em/"},"English Ministry")),i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/cm/"},"粵語事工")),i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/mm/"},"國語事工"))))},p=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/gatsby-contentful-starter/",i.a.createElement(o,null,i.a.createElement(m,null),a)},a}(i.a.Component);a.a=p},164:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(160),i=t(165),c=t.n(i),o=t(173),s=t.n(o);a.a=function(e){var a=e.article;return r.a.createElement("div",{className:s.a.preview},r.a.createElement(c.a,{alt:"",fluid:a.heroImage.fluid}),r.a.createElement("h3",{className:s.a.previewTitle},r.a.createElement(l.a,{to:"/blog/"+a.slug},a.title)),r.a.createElement("small",null,a.publishDate),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.description.childMarkdownRemark.html}}),a.tags.map(function(e){return r.a.createElement("p",{className:s.a.tag,key:e},e)}))}},241:function(e,a,t){var n=t(12).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-6740fd1b8e0af705739e.js.map