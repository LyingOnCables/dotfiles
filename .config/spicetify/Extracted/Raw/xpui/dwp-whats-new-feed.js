"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4084],{61089:(e,t,i)=>{i.d(t,{p:()=>C});var n=i(52542),a=i(30758),r=i(97500),l=i.n(r),s=i(13534),o=i(11854),d=i(65707),c=i(89241);const u="(min-width: 0px)",m="(min-width: 0px) and (max-width: 767px)",p="(min-width: 768px)",v="(min-width: 768px) and (max-width: 1023px)",h="(min-width: 1024px)",f="(min-width: 1024px) and (max-width: 1279px)",x="(min-width: 1280px)",g="(min-width: 1280px) and (max-width: 1919px)",y="(min-width: 1920px)";const w="FvfvGU3jvHRskUU9v9_8",b="Q9AlbZn2EGzy3MTWXa8X",j="mxmxS0y8LiwSs5nueKPT",k="GXxVAveNFStY3pBI_NO4",N="eHcXC2s97InYP7rMNT0H";var I=i(86070),C=(0,a.memo)((function(e){var t=e.children,i=e.message,a=e.title,r=e.linkTitle,C=e.linkTo,F=e.onClick,A=e.renderInline,E=void 0!==A&&A,O={isXS:(0,c.U)(u),isXSOnly:(0,c.U)(m),isSM:(0,c.U)(p),isSMOnly:(0,c.U)(v),isMD:(0,c.U)(h),isMDOnly:(0,c.U)(f),isLG:(0,c.U)(x),isLGOnly:(0,c.U)(g),isXL:(0,c.U)(y)},P=O.isXSOnly||O.isSMOnly;return(0,I.jsxs)("section",{className:l()(w,(0,n.A)({},b,E)),children:[t,(0,I.jsx)(s.E,{as:"h1",variant:P?"titleSmall":"titleMedium",className:k,children:a}),(0,I.jsx)(s.E,{variant:P?"bodySmall":"bodyMedium",className:N,children:i}),r&&(C||F)&&(0,I.jsx)(o.$,{colorSet:"invertedLight",className:j,href:C,onClick:F,component:d.v,children:r})]})}))},13951:(e,t,i)=>{i.d(t,{s:()=>j});var n=i(85093),a=i(52542),r=i(13734),l=(i(7651),i(83234),i(30456),i(26701),i(78551),i(25550),i(37417),i(11737),i(51691),i(702),i(5672),i(43379),i(82467),i(34192),i(88856),i(51565),i(15342),i(18316),i(30758)),s=i(97500),o=i.n(s),d=i(89255),c=i(70915),u=i(30747),m=i(37468);const p="IVnoxrO3iL_tz5ULI8g_";var v=i(86070),h=["filterId","isPrimaryFilter","isPlaceholder","resetFilterIds","toggleFilterId","className","innerRef","onFilterClick","index"],f=["filterId","isPlaceholder","resetFilterIds","toggleFilterId","className","innerRef","onFilterClick","index"];function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach((function(t){(0,a.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var y={marginBlockEnd:0,willChange:"transform, opacity"},w=function(e){var t=e.filterId,i=void 0===t?null:t,n=e.isPrimaryFilter,s=e.isPlaceholder,c=e.resetFilterIds,u=e.toggleFilterId,m=e.className,f=e.innerRef,x=e.onFilterClick,w=e.index,b=void 0===w?0:w,j=(0,r.A)(e,h),k=j.selected,N=(0,l.useCallback)((function(){if(!i)return c(),void x(null,!1,b);x(i,!!k,b),u(i)}),[i,c,u,x,k,b]),I=(0,l.useCallback)((function(e){e.detail>1||s||N()}),[s,N]);return(0,v.jsx)(d.v,g(g({},j),{},{className:o()(m,(0,a.A)({},p,s)),onClick:I,selectedColorSet:"invertedLight",secondary:k&&!n,style:y,ref:f,tabIndex:-1}))},b=function(e){var t=e.filterId,i=void 0===t?null:t,n=e.isPlaceholder,s=e.resetFilterIds,d=e.toggleFilterId,u=e.className,m=e.innerRef,h=e.onFilterClick,x=e.index,w=void 0===x?0:x,b=(0,r.A)(e,f),j=b.selected,k=(0,l.useCallback)((function(){if(!i)return s(),void h(null,!1,w);h(i,!!j,w),d(i)}),[i,s,d,h,j,w]),N=(0,l.useCallback)((function(e){e.detail>1||n||k()}),[n,k]);return(0,v.jsx)(c.m,g(g({},b),{},{"aria-label":b["aria-label"],className:o()(u,(0,a.A)({},p,n)),onClick:N,style:y,ref:m,tabIndex:-1}))},j=(0,l.memo)((function(e){var t=e.placeholderFilters,i=void 0===t?[]:t,a=e.availableFilters,r=e.selectedFilters,s=e.toggleFilterId,o=e.resetFilterIds,d=e.onFilterClick,c=e.ariaLabel,p=e.clearBtnAriaLabel,h=e.className,f=e.applyLightThemeControls,x=void 0!==f&&f,g=!(r||a),y=g?i:[].concat((0,n.A)(null!=r?r:[]),(0,n.A)(null!=a?a:[])),j=(0,l.useRef)(null),k=(0,l.useCallback)((function(){var e,t;(0,m.MS)(j.current,(null===(e=j.current)||void 0===e?void 0:e.nextElementSibling)instanceof HTMLElement?null===(t=j.current)||void 0===t?void 0:t.nextElementSibling:null),o()}),[o]);return 0===y.length?null:(0,v.jsxs)(u.FN,{className:h,ariaLabel:c,applyLightThemeControls:x,children:[!(null==r||!r.length)&&(0,v.jsx)(b,{resetFilterIds:k,toggleFilterId:s,onFilterClick:d,"aria-label":null!=p?p:c,innerRef:j}),y.map((function(e,t){var i=null==r?void 0:r.includes(e),n=0===t;return(0,v.jsx)(w,{filterId:e.id,isPrimaryFilter:n,isPlaceholder:g,onFilterClick:d,resetFilterIds:o,toggleFilterId:s,selected:i,index:t,children:e.getName()},e.id)}))]})}))},57423:(e,t,i)=>{i.r(t),i.d(t,{FeedContentWithEmptyStates:()=>Je,WhatsNewFeed:()=>Ke});var n=i(85093),a=i(12341),r=i(52542),l=i(62822),s=i(93091),o=i.n(s),d=(i(7651),i(83234),i(30456),i(75380),i(26701),i(78551),i(34518),i(25550),i(70750),i(77905),i(68216),i(47994),i(37417),i(11737),i(51691),i(702),i(5672),i(43379),i(60482),i(82467),i(34192),i(88856),i(51565),i(15342),i(18316),i(30758)),c=i(11656),u=i(97500),m=i.n(u),p=i(13534),v=i(12072),h=i(7355),f=i(92107),x=i(61089),g=i(85726),y=i(34805),w=(i(79024),i(71425),i(97460),i(93577),i(13951)),b=i(70566);const j="q5riNmaoksSuEEvQAurA";var k=i(86070),N=[{id:"ALBUM",getName:function(){return f.Ru.get("web-player.whats-new-feed.filters.music")},ubiId:"Music"},{id:"EPISODE",getName:function(){return f.Ru.get("web-player.whats-new-feed.filters.episodes")},ubiId:"Podcast & Shows"},{id:"WHATS_NEW_FEED_NOTIFICATION",getName:function(){return f.Ru.get("web-player.whats-new-feed.filters.notifications")},ubiId:"Merch & Events"}],I=(0,d.memo)((function(e){var t=e.availableFilters,i=e.selectedFilters,n=e.toggleFilterId,a=e.resetFilterIds,r=e.className,l=e.spec,s=f.Ru.get("web-player.whats-new-feed.filters.options"),o=(0,b.s)(),c=(0,d.useMemo)((function(){var e=new Map;return(t||[]).forEach((function(t){e.set(t.id,t)})),e}),[t]),u=(0,d.useCallback)((function(e,t,i){var n;if(!e)return n=l.clearFiltersFactory().hitClearFilter(),void o.logInteraction(n);var a=c.get(e);if(a){var r=l.filterChipFactory({identifier:a.ubiId,position:i});n=t?r.hitClearFilter():r.hitFilter(),o.logInteraction(n)}}),[l,o,c]);return(0,k.jsx)("div",{className:j,children:(0,k.jsx)(w.s,{placeholderFilters:N,availableFilters:t,selectedFilters:i,toggleFilterId:n,onFilterClick:u,resetFilterIds:a,ariaLabel:s,className:r})})})),C=i(26173),F=i(96971),A=i(66475),E=i(38195),O=i(78988),P=i(28112),S=i(79564),R=i(51055),B=i(80021),L=i(83643),D=i(59739),M=i(51943),T=function(e){var t=e.dateAdded,i=e.prefix,n=t.getTime()>0&&f.Ru.formatRelativeDate(t,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"});return n&&i&&(n="".concat(i," ").concat(n)),(0,k.jsx)(p.E,{variant:"bodySmall",children:n})},U=i(93051),_=i(44113),z=i(47795),V=function(e){switch(e){case z.E.LARGE:return _.Qe.SIZE_112;case z.E.MEDIUM:default:return _.Qe.SIZE_64}},G=i(99365),W=i(8016),H=i(90823),Y=i(76843),X=i(18180),q=i(60455),J=i(99888),K=i(63749),Z=i(48133),Q=i(87700),$=i(79431),ee=i(76026),te=i(16920),ie=i(42552);const ne={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",row:"SjhDNg4bQRQmIJAba47Z",actions:"eYvk_xcxVNMwCBkfY3O0",visibleAction:"TtoLzgGMAU9nkxMbixq9",playButton:"Rw7qIj58PeAz8p6dejOP",content:"K3oY37O4n1fElTqkmnd8",description:"AkSMHdbIxX7Fj7e_8APi",subtitleLink:"uzhTSuCH_4ojaqifMJRB",imageWrapper:"q82J4Wio82IYN9poOJfd",imageContainer:"D71yL9GnHIYg7PheYlz8",showImage:"KKRyrr7NUJy1VBWydHHH",largeImage:"kAYwHqwZ7agHEAGbYN3v",explicitIcon:"HjDtVqhmfzWlsvg4dliB",timeAgo:"H4ODi0SPeEXBawCgANeX",footer:"XaingSntLq8c8wEfqf81",episodeBody:"sbM0nIPBghB_k5Tb5a8y",fallbackIcon:"SCFHE5DLXwCFJz8oVFMs",dateAndTime:"FDm94lE0xkDYtA1Bk7Jc",medium:"jYce7J2dSeD3e9qvWO7N",seperator:"tDRI4dCXFmqKzB1b6K3u",seperatorAlbum:"TPNGFuTvzNVNHisumnhg"};function ae(e){var t,i,n=e.album,s=e.onLike,c=e.onMoreButtonClick,u=e.onDownloadClick,v=e.spec,h=(0,d.useRef)(null);(0,Y.p)(h);var x,g=(0,q.y)(),y=g===z.E.LARGE,w=(0,W.P)({itemUris:[n.uri],dragLabelText:n.name}),j=w.draggable,N=w.onDragStart;n.date&&(x=(0,k.jsx)(T,{dateAdded:new Date(n.date.isoString)}));var I=(0,J.A)(n.uri),_=(0,a.A)(I,2),ae=_[0],re=_[1],le=(null===(t=n.artists)||void 0===t?void 0:t.items.map((function(e){return e.profile.name})).join(f.Ru.getSeparator()))||"",se=(0,b.s)(),oe=(0,d.useCallback)((0,l.A)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re(!ae);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])}))),[ae,re]),de=(0,$.P)({uri:n.uri},{featureIdentifier:"whats_new_panel",referrerIdentifier:"whats_new_panel"}),ce=de.togglePlay,ue=de.isPlaying,me=de.isActive,pe=(0,d.useCallback)((function(e){var t;e.preventDefault(),me&&!ue&&(t=v.playButtonFactory().hitResume({itemToBeResumed:n.uri})),ue||me||(t=v.playButtonFactory().hitPlay({itemToBePlayed:n.uri})),ue&&(t=v.playButtonFactory().hitPause({itemToBePaused:n.uri})),t&&se.logInteraction(t),ce()}),[ce,me,ue,se,v,n.uri]),ve=(0,H.V)(n.uri),he=(0,Z.T)(n.uri),fe=(0,d.useCallback)((function(){var e=v.hitUiNavigate({destination:n.uri});se.logInteraction(e),ve()}),[n.uri,v,se,ve]),xe=(0,d.useCallback)((function(e){var t=v.saveButtonFactory().hitLike({itemToBeLiked:n.uri}),i=v.saveButtonFactory().hitRemoveLike({itemNoLongerLiked:n.uri});se.logInteraction(e?t:i),null==s||s(e)}),[v,se,n.uri,s]),ge=(0,d.useCallback)((function(e,t){var i;t===Q.NV.ADD?i=v.downloadButtonFactory().hitDownload({itemToDownload:n.uri}):t===Q.NV.REMOVE&&(i=v.downloadButtonFactory().hitUiReveal()),i&&se.logInteraction(i),null==u||u(e,t)}),[n.uri,se,v,u]),ye=(0,d.useCallback)((function(e){null==c||c(e)}),[c]),we=(0,d.useCallback)((function(){var e=v.titleFactory().hitUiNavigate({destination:n.uri});se.logInteraction(e)}),[n.uri,se,v]),be=f.Ru.get("tracklist.a11y.play",n.name,le),je=f.Ru.get("tracklist.a11y.pause",n.name,le),ke=(0,k.jsx)(C.d,{lineClamp:1,children:(0,k.jsx)(U.N,{to:n.uri,onClick:we,children:n.name})}),Ne=n.artists?n.artists.items.map((function(e,t,i){return(0,k.jsxs)(d.Fragment,{children:[(0,k.jsx)(L.h,{menu:(0,k.jsx)(M.t,{uri:e.uri}),children:(0,k.jsx)(U.N,{to:e.uri,className:ne.subtitleLink,onClick:(n=e.uri,function(){var e=v.subtitleFactory().hitUiNavigate({destination:n});se.logInteraction(e)}),children:e.profile.name})}),t<i.length-1&&f.Ru.getSeparator()]},t);var n})):"",Ie=(0,k.jsx)("div",{className:ne.imageContainer,children:(0,k.jsx)(X.b,{className:m()(ne.showImage,(0,r.A)({},ne.largeImage,y)),type:te.c.ALBUM,size:V(g),title:n.name,images:null===(i=n.coverArt)||void 0===i?void 0:i.sources})}),Ce=(0,k.jsxs)(p.E,{className:ne.dateAndTime,children:[(0,ie.C)(n.albumType),(0,k.jsx)("span",{className:ne.seperatorAlbum,children:x})]}),Fe=y?O.t.sm:O.t.xs,Ae=(0,k.jsxs)("div",{className:ne.footer,children:[(0,k.jsxs)("div",{className:ne.actions,children:[(0,k.jsx)(R.b,{onClick:xe,uri:n.uri,size:Fe,className:ne.visibleAction}),(0,k.jsx)(P.f,{onClick:ge,className:m()((0,r.A)({},ne.visibleAction,(0,K.X)(he))),uri:n.uri,isFollowing:ae,onFollow:oe,size:Fe,condensed:!0}),(0,k.jsx)(ee.r,{spec:v,children:(0,k.jsx)(B.b,{menu:(0,k.jsx)(D.h,{uri:n.uri}),children:(0,k.jsx)(S.e,{onClick:ye,size:Fe})})})]}),(0,k.jsx)("div",{className:ne.playButton,children:(0,k.jsx)(G.R,{size:"small",onClick:pe,isPlaying:ue,ariaPlayLabel:be,ariaPauseLabel:je,version:G.H.secondary})})]});return(0,k.jsx)(L.h,{menu:(0,k.jsx)(D.h,{uri:n.uri}),children:(0,k.jsx)("div",{draggable:j,onDragStart:N,children:(0,k.jsx)(F.v,{size:"xxl",ref:h,className:ne.row,media:Ie,title:ke,subtitle:(0,k.jsx)(A.j,{lineClamp:1,children:Ne}),id:n.uri,variant:"naked",body:Ce,footer:Ae,onClick:fe,hoverBackgroundColor:"backgroundHighlight",layout:y?"wide":"regular",horizontalGap:y?E.lT:E.CJ,verticalGap:E.v4,paddingBlockStart:"16px",paddingBlockEnd:"16px"})})})}i(14551);var re=i(30749),le=i(25293),se=i(15317),oe=i(53163),de=i(64877),ce=i(64348),ue=i(57186),me=i(46198),pe=i(33814),ve=i(24119),he=i(97724);const fe={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",episodeBody:"N3zMh5FMdbBKUvz4uDfe",progressBar:"h0YQcDKdGmWssZyuIcvq",seperator:"lMQrLkJVNqZAzT95gQnA"};var xe=1e4;function ge(e){var t,i,n,r,l=e.episode,s=e.isPlaying,o=e.isActive,c=e.isFullyPlayed,u=e.setIsFullyPlayed;l.releaseDate&&(r=(0,k.jsx)(T,{dateAdded:new Date(l.releaseDate.isoString)}));var m=null!==(t=null===(i=l.restrictions)||void 0===i?void 0:i.paywallContent)&&void 0!==t&&t,v=(0,d.useRef)(null),h=(0,pe.S)(xe,(function(e){var t;return(null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===l.uri})),x=(0,a.A)(h,1)[0];(0,d.useEffect)((function(){s&&(v.current=x)}),[s,x]),(0,d.useEffect)((function(){!s&&v.current&&l.duration.totalMilliseconds<=v.current&&u(!0)}),[s,l.duration.totalMilliseconds,u]);var g=(0,he.b)({contentRating:null===(n=l.contentRating)||void 0===n?void 0:n.label,isPaywalled:m}).badges,y=(0,k.jsxs)(k.Fragment,{children:[g.explicit&&(0,k.jsx)(ce.U,{}),g.paid&&(0,k.jsx)(ue.y,{}),g.nineteen&&(0,k.jsx)(me.q,{size:16})]}),w=(0,k.jsx)(ve.j,{isPlaying:s,fullyPlayed:c,durationMs:l.duration.totalMilliseconds,resumePositionMs:v.current||l.playedState.playPositionMilliseconds,position:o?x:void 0,className:fe.progressBar});return(0,k.jsxs)("div",{className:fe.episodeBody,children:[y,(0,k.jsx)(p.E,{variant:"bodySmall",children:f.Ru.get("card.tag.episode")}),(0,k.jsx)("span",{className:fe.seperator}),(0,k.jsx)(p.E,{variant:"bodySmall",children:r}),(0,k.jsx)("span",{className:fe.seperator}),(0,k.jsx)(p.E,{variant:"bodySmall",children:w})]})}var ye=i(4140),we=i(39954);const be={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",row:"IEDOUN3mwwZhHVziC03a",actions:"Olh4d9g46wryDMTzRRmw",visibleAction:"zyDT2CX7tvGjKxxUnO7D",playButton:"TKntS5R19vVI3J9xxwDL",content:"h0EpgyZTOC5U8KOQL4A6",description:"IoTOUob09_0_3kC8ORbu",subtitleLink:"aKVUno8YrkyvGsg7iS59",imageWrapper:"O3nnn9_DD_2DzYEa64jv",imageContainer:"iF91evq0EtvlgCxIRI_6",showImage:"VzSICihKBYcgMsSFv8SH",largeImage:"iOxe1erWkyDFY3p4NG8x",explicitIcon:"iseqhC6eLcxmoGPk6JIE",timeAgo:"kUzqUQECoj43gCthqXdD",footer:"_72TrTBKZHea2vJ2I2BJX",episodeBody:"Bqh5LKZCXF5xkKJcEx7a",fallbackIcon:"OdJvEiRzLWN66tky0bvM",dateAndTime:"Y1f7yukeZPBc6n1uu1pi",medium:"uHM5B97d0hwAYDvOOmY8",seperator:"Oe5t36YEWzbJKH5LBNYD",seperatorAlbum:"dJMAGpC7b6bMSWNEfk6r"};function je(e){var t,i=e.episode,n=e.podcastName,l=e.podcastUri,s=e.onLike,o=e.onMoreButtonClick,c=e.onDownloadClick,u=e.spec,v=e.featureIdentifier,h=e.referrerIdentifier,x=e.size,g=void 0===x?"xxl":x,y=(0,d.useRef)(null);(0,Y.p)(y);var w,j=(0,q.y)(),N=(0,Z.T)(i.uri),I=j===z.E.LARGE,O=(0,W.P)({itemUris:[i.uri],dragLabelText:"".concat(i.name," • ").concat(n)}),P=O.draggable,R=O.onDragStart,D=(0,b.s)(),M=(0,$.P)({uri:i.uri},{featureIdentifier:v,referrerIdentifier:h}),T=M.togglePlay,_=M.isPlaying,J=M.isActive,ie=(0,d.useState)(i.playedState.state===ye._w.Completed),ne=(0,a.A)(ie,2),ae=ne[0],ce=ne[1],ue=(0,H.V)(i.uri),me=f.Ru.get("tracklist.a11y.play",i.name,n),pe=f.Ru.get("tracklist.a11y.pause",i.name,n),ve=(0,d.useCallback)((function(){var e=u.hitUiNavigate({destination:i.uri});D.logInteraction(e),ue()}),[ue,D,u,i.uri]),he=(0,d.useCallback)((function(e){var t=u.saveButtonFactory().hitLike({itemToBeLiked:i.uri}),n=u.saveButtonFactory().hitRemoveLike({itemNoLongerLiked:i.uri});D.logInteraction(e?t:n),null==s||s(e)}),[u,D,i.uri,s]),fe=(0,d.useCallback)((function(e,t){var n;t===Q.NV.ADD?n=u.downloadButtonFactory().hitDownload({itemToDownload:i.uri}):t===Q.NV.REMOVE&&(n=u.downloadButtonFactory().hitUiReveal()),n&&D.logInteraction(n),null==c||c(e,t)}),[D,u,i.uri,c]),xe=(0,d.useCallback)((function(){var e=u.titleFactory().hitUiNavigate({destination:i.uri});D.logInteraction(e)}),[D,u,i.uri]),je=(0,d.useCallback)((function(e){var t;e.preventDefault(),J&&!_&&(t=u.playButtonFactory().hitResume({itemToBeResumed:i.uri})),_||J||(t=u.playButtonFactory().hitPlay({itemToBePlayed:i.uri})),_&&(t=u.playButtonFactory().hitPause({itemToBePaused:i.uri})),t&&D.logInteraction(t),T()}),[T,D,u,i.uri,_,J]),ke=(0,d.useCallback)((function(e){null==o||o(e)}),[o]),Ne=(0,k.jsx)(C.d,{lineClamp:2,children:(0,k.jsx)(U.N,{to:i.uri,onClick:xe,children:i.name})}),Ie=(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(A.j,{lineClamp:1,paddingBottom:I?"8px":void 0,children:(0,k.jsx)(L.h,{menu:(0,k.jsx)(de.H,{uri:l}),children:(0,k.jsx)(U.N,{to:l,className:be.subtitleLink,onClick:(w=l,function(){var e=u.subtitleFactory().hitUiNavigate({destination:w});D.logInteraction(e)}),children:(0,k.jsx)(p.E,{as:"span",variant:"bodySmall",children:n})})})})}),Ce=(0,k.jsx)("div",{className:be.imageContainer,children:(0,k.jsx)(X.b,{className:m()(be.showImage,(0,r.A)({},be.largeImage,I)),type:te.c.EPISODE,size:V(j),title:i.name,images:null===(t=i.coverArt)||void 0===t?void 0:t.sources})}),Fe=I?"medium":"small",Ae=(0,we.Wx)(i.restrictions,i.playability),Ee=Ae.isPaywalled&&!Ae.isUserSubscribed,Oe=!Ee,Pe=(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(ge,{episode:i,isPlaying:_,isActive:J,isFullyPlayed:ae,setIsFullyPlayed:ce}),(0,k.jsxs)("div",{className:be.footer,children:[(0,k.jsxs)("div",{className:be.actions,children:[(0,k.jsx)(se.b,{onClick:he,uri:i.uri,size:Fe,className:be.visibleAction,condensed:!0}),(0,k.jsx)(le.e,{className:m()((0,r.A)({},be.visibleAction,(0,K.X)(N))),onClick:fe,uri:i.uri,size:Fe,canDownload:Oe,condensed:!0}),(0,k.jsx)(ee.r,{spec:u,children:(0,k.jsx)(B.b,{menu:(0,k.jsx)(oe.b,{uri:i.uri,onMarkAsPlayed:ce,isPlayed:ae}),children:(0,k.jsx)(S.e,{onClick:ke,size:Fe})})})]}),(0,k.jsx)("div",{className:be.playButton,children:(0,k.jsx)(G.R,{"aria-label":"whats-new-feed-play-button",size:"small",onClick:je,isPlaying:_,ariaPlayLabel:me,ariaPauseLabel:pe,version:G.H.secondary,disabled:!i.playability.playable,locked:Ee})})]})]}),Se=(0,k.jsx)(re.v,{lineClamp:2,paddingBottom:I?"4px":void 0,className:be.description,children:(0,k.jsx)(p.E,{as:"span",variant:"bodySmall",children:i.description})});return(0,k.jsx)(L.h,{menu:(0,k.jsx)(oe.b,{uri:i.uri,onMarkAsPlayed:ce,isPlayed:ae}),children:(0,k.jsx)("div",{draggable:P,onDragStart:R,children:(0,k.jsx)(F.v,{size:g,ref:y,className:be.row,media:Ce,title:Ne,subtitle:Ie,id:i.uri,variant:"naked",body:Se,footer:Pe,onClick:ve,hoverBackgroundColor:"backgroundHighlight",layout:I?"wide":"regular",horizontalGap:I?E.lT:E.CJ,verticalGap:E.v4,paddingBlockStart:"16px",paddingBlockEnd:"16px"})})})}function ke(e){var t=e.item,i=e.spec;if("AlbumResponseWrapper"===t.content.__typename){var n=t.content.data;if("Album"===n.__typename)return(0,k.jsx)(ae,{album:n,spec:i})}if("EpisodeOrChapterResponseWrapper"===t.content.__typename){var a=t.content.data;if("Chapter"===a.__typename)return(0,k.jsx)(k.Fragment,{});if("Episode"===a.__typename){var r="",l="";return"Podcast"===a.podcastV2.data.__typename&&(r=a.podcastV2.data.name,l=a.podcastV2.data.uri),(0,k.jsx)(je,{episode:a,podcastName:r,podcastUri:l,spec:i,referrerIdentifier:"whats_new_panel",featureIdentifier:"whats_new_panel"})}}return(0,k.jsx)(k.Fragment,{})}var Ne=i(28121);const Ie="PNAsPBOgLLv9EX8LZ6xL",Ce="UjEEhwY497frsytmeR9u",Fe="VQ0BLAewv7Aw5H3hV0YK",Ae="pxV6pRWzmVb2_leuWtEG",Ee="G97bWDW7Mp3aZEL19Umr",Oe="p6l0_RUXhei0P7rrQaeg",Pe="erd9k4EG_HWK3UzsLhht",Se="ap9brNzQxEcx9SV2FksM",Re="pVVteJIfAdehWU3vX7JR",Be="J_VZoZ53jBtkdyxrt2My",Le="VOGWdrCvz59_A_wAZv58",De="m8V0BPcmce3GusmXkFhM";var Me=d.memo((function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Ne.Y,{as:"h3",variant:"titleSmall",className:Be,charCount:4,isLoading:!0}),(0,k.jsx)("div",{className:Se,children:[20,50,25].map((function(e,t){return(0,k.jsx)(Ne.Y,{as:"div",variant:"bodySmall",className:Be,charCount:e,isLoading:!0},"".concat(e,"-").concat(t))}))})]})})),Te=i(38392),Ue=i(53406),_e=i(87718),ze=i(12574);function Ve(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Ge(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(i),!0).forEach((function(t){(0,r.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Ve(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var We={offset:0,limit:50,onlyUnPlayedItems:!1};function He(){return(He=(0,l.A)(o().mark((function e(t,i){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(y.BP,{items:i});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ye=(0,r.A)((0,r.A)({},ye.tv.Album,{id:"ALBUM",getName:function(){return f.Ru.get("web-player.whats-new-feed.filters.music")},ubiId:"Music",active:!1}),ye.tv.Episode,{id:"EPISODE",getName:function(){return f.Ru.get("web-player.whats-new-feed.filters.episodes")},ubiId:"Podcast & Shows",active:!1});function Xe(e){switch(e){case ye.tv.Album:return ye.tv.Album;case ye.tv.Episode:return ye.tv.Episode;case ye.tv.WhatsNewFeedNotification:return ye.tv.WhatsNewFeedNotification;case ye.tv.Unknown:default:return ye.tv.Unknown}}var qe=function(e){var t=e.spec,i=e.items,l=(0,d.useState)([]),s=(0,a.A)(l,2),o=s[0],c=s[1],u=function(e){var t,i,n=e.state.state;if((null===(t=e.state.timestamp)||void 0===t||!t.isoString)&&n===ye.GN.New)return!0;if(null!==(i=e.state.timestamp)&&void 0!==i&&i.isoString){var a=new Date(e.state.timestamp.isoString).getTime();return Date.now()-a<=36e5}return!1},m=i.findIndex((function(e){return!u(e)})),v=(0,d.useCallback)((function(e,i){var n=u(e)&&i<m,a=n&&0===i;return(0,k.jsxs)("div",{className:De,children:[a&&(0,k.jsx)(p.E,{as:"h3",variant:"titleSmall",className:Fe,semanticColor:"textBase",children:f.Ru.get("web-player.whats-new-feed.new-section-title")}),!n&&i===m&&(0,k.jsx)(p.E,{as:"h3",variant:"titleSmall",className:Fe,semanticColor:"textBase",children:f.Ru.get("web-player.whats-new-feed.earlier-section-title")}),(0,k.jsx)("hr",{className:Le,"aria-hidden":!0}),(0,k.jsx)(ke,{item:e,spec:t.notificationItemFactory({identifier:e.id,position:i})},e.id)]},e.id)}),[m,t]),h=(0,d.useRef)(0),x=(0,d.useCallback)((function(){var e=i.slice(h.current,h.current+10);c((function(t){return h.current=h.current+10,[].concat((0,n.A)(t),(0,n.A)(e))}))}),[i]),g=(0,Ue.x)((0,r.A)((0,r.A)({},z.E.MEDIUM,0),z.E.LARGE,600)),y=g.ref,w=g.breakpoint;return(0,k.jsx)(q.o.Provider,{value:w,children:(0,k.jsx)("div",{className:Pe,role:"list",ref:y,children:(0,k.jsx)(Te._,{onReachBottom:x,triggerOnInitialLoad:!0,children:o.map(v)})})})},Je=function(e){var t,i=e.includedContentTypes,n=e.data,a=e.handleRetry,r=e.error,l=e.spec;if(e.loading)return(0,k.jsxs)("div",{className:Ae,role:"list",children:[(0,k.jsx)(Me,{}),(0,k.jsx)(Me,{})]});if(r)return(0,k.jsxs)("div",{className:Ee,dir:"auto",children:[(0,k.jsx)(p.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",children:f.Ru.get("error.generic")}),(0,k.jsx)(p.E,{as:"p",variant:"bodyMedium",children:f.Ru.get("web-player.whats-new-feed.panel.error")}),(0,k.jsx)(v.n,{className:Oe,onClick:a,size:"small",children:(0,k.jsx)(p.E,{as:"span",variant:"bodyMediumBold",semanticColor:"textBase",children:f.Ru.get("web-player.whats-new-feed.panel.error.button")})})]});var s=null==n||null===(t=n.whatsNewFeedItems)||void 0===t?void 0:t.items;if(!s||0===(null==s?void 0:s.length)){var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.includes(ye.tv.Episode)?{title:f.Ru.get("web-player.whats-new-feed.panel.empty-results-podcast.title"),message:f.Ru.get("web-player.whats-new-feed.panel.empty-results-podcast.message")}:e.includes(ye.tv.Album)?{title:f.Ru.get("web-player.whats-new-feed.panel.empty-results-music.title"),message:f.Ru.get("web-player.whats-new-feed.panel.empty-results-music.message")}:{title:f.Ru.get("web-player.whats-new-feed.panel.empty-results-all.title"),message:f.Ru.get("web-player.whats-new-feed.panel.empty-results-all.message")}}(i),d=o.title,c=o.message;return(0,k.jsx)(x.p,{title:d,message:c,renderInline:!0})}return(0,k.jsx)(qe,{items:s,spec:l},i.join(" "))},Ke=function(){var e,t,i=(0,c.jE)(),n=(0,ze.r)(h.q,{}),l=n.spec,s=n.logger,o=(0,d.useCallback)((function(){return[y.lo.name]}),[]),u=(0,d.useCallback)((function(){i.invalidateQueries({queryKey:o()})}),[i,o]);(0,d.useEffect)((function(){s.logImpression(l.impression())}),[s,l]);var v=(0,d.useState)(Ye),x=(0,a.A)(v,2),w=x[0],b=x[1],j=Object.values(w),N=j.filter((function(e){return e.active})),C=N.length>0?[]:j,F=N.map((function(e){return e.id})),A=(0,d.useCallback)((function(e){var t,i,n,a=Xe(e),l={id:(null===(t=w[a])||void 0===t?void 0:t.id)||ye.tv.Unknown,getName:function(){var e;return(null===(e=w[a])||void 0===e?void 0:e.getName())||""},ubiId:(null===(i=w[a])||void 0===i?void 0:i.ubiId)||"",active:!(null!==(n=w[a])&&void 0!==n&&n.active)},s=Ge(Ge(Ge({},Ye),w),{},(0,r.A)({},l.id||"UNKNOWN",l));b(s)}),[w,b]),E=(0,d.useCallback)((function(){b(Ye)}),[b]),O=(0,y.dS)(Ge(Ge({},We),{},{includedContentTypes:null!==(e=F.map(Xe))&&void 0!==e?e:[]}),{gcTime:30*_e.i}),P=O.data,S=O.error,R=O.loading,B=(0,(0,g.mv)().getGraphQLLoader)();return(0,d.useEffect)((function(){var e,t;if(null!=P&&null!==(e=P.whatsNewFeedItems)&&void 0!==e&&e.items){var i=null==P||null===(t=P.whatsNewFeedItems)||void 0===t?void 0:t.items.filter((function(e){return e.state.state===ye.GN.New})).map((function(e){return{id:e.id,state:ye.GN.Seen}}));i.length>0&&function(e,t){He.apply(this,arguments)}(B,{items:i})}}),[null==P||null===(t=P.whatsNewFeedItems)||void 0===t?void 0:t.items,B]),(0,k.jsxs)("section",{className:m()(Re,"contentSpacing"),children:[(0,k.jsxs)("div",{className:Ie,children:[(0,k.jsx)(p.E,{as:"h1",semanticColor:"textBase",variant:"titleMedium",className:Ce,children:f.Ru.get("web-player.whats-new-feed.panel.title")}),(0,k.jsx)(p.E,{as:"p",semanticColor:"textSubdued",variant:"bodySmall",children:f.Ru.get("web-player.whats-new-feed.panel.subtitle")})]}),!S&&(0,k.jsx)(I,{availableFilters:C,toggleFilterId:A,selectedFilters:N,resetFilterIds:E,spec:l.filterChipsFactory()}),(0,k.jsx)(Je,{includedContentTypes:F.map(Xe),data:P,loading:R,error:S,spec:l,handleRetry:u})]})}},57186:(e,t,i)=>{i.d(t,{y:()=>l});var n=i(92107),a=i(6305),r=i(86070),l=function(){return(0,r.jsx)(a.E,{ariaLabel:n.Ru.get("paid"),text:n.Ru.get("paid")})}},38392:(e,t,i)=>{i.d(t,{_:()=>u});var n=i(52542),a=i(30758),r=i(57574),l=i(97500),s=i.n(l);const o="eqw9lvuoZHrkWMTdyTpY",d="lb08f71wES9AQnKx6e0R";var c=i(86070),u=a.memo((function(e){var t=e.triggerOnInitialLoad,i=void 0!==t&&t,l=e.onReachBottom,u=e.showScrollbar,m=void 0===u||u,p=e.horizontalScroll,v=void 0!==p&&p,h=e.className,f=(0,r.Wx)({initialInView:i}),x=f.ref,g=f.inView;return(0,a.useEffect)((function(){g&&l&&l()}),[g,l]),(0,c.jsxs)("div",{className:s()((0,n.A)((0,n.A)({},d,!m),o,v),h),"data-testid":"infinite-scroll-list",children:[e.children,(0,c.jsx)("div",{ref:x})]})}))},76843:(e,t,i)=>{i.d(t,{p:()=>r});var n=i(12341),a=(i(26701),i(43379),i(34192),i(51565),i(18316),i(30758)),r=function(e){var t=(0,a.useState)(0),i=(0,n.A)(t,2),r=i[0],l=i[1];function s(t){var i,n=null===(i=e.current)||void 0===i?void 0:i.querySelectorAll('button:not([disabled]), [href], input, select, textarea, a,[tabindex]:not([tabindex="-1"])');if(n){n.forEach((function(e){e.setAttribute("tabindex","-1")})),n&&n[0].setAttribute("tabindex","0");var a=r;if(n&&n.length>0)switch(t.key){case"Tab":document.activeElement&&l(0);break;case"ArrowUp":0===a?(t.preventDefault(),a=n.length-1):a-=1,n[a].focus(),l(a);break;case"ArrowDown":t.preventDefault(),a===n.length-1?a=0:a+=1,n[a].focus(),l(a)}}}a.useEffect((function(){var t=e.current;return null==t||t.addEventListener("keydown",s),function(){null==t||t.removeEventListener("keydown",s)}}))}},63749:(e,t,i)=>{i.d(t,{X:()=>a});i(78551),i(82467);var n=i(87700);function a(e){return[n.kw.YES,n.kw.DOWNLOADING,n.kw.WAITING].includes(e)}}}]);
//# sourceMappingURL=dwp-whats-new-feed.js.map