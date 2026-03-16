(function () {
  var T = {
    // Nav
    "nav.home": { en: "Home", zh: "首页" },
    "nav.about": { en: "About me", zh: "关于我" },
    "nav.price": { en: "Price", zh: "价格" },
    "nav.addons": { en: "Add-ons", zh: "附加服务" },
    "nav.tos": { en: "TOS", zh: "条款" },

    // Header
    "header.title": { en: "Lanaoi's Live2D Commissions", zh: "Lanaoi的Live2D委托" },
    "header.subtitle": { en: "\u00b7Live2D Model Rigging & Animation\u00b7", zh: "\u00b7Live2D模型绑定与动画\u00b7" },

    // Home
    "home.aboutme": { en: "About me", zh: "关于我" },
    "home.rigging": { en: "Live2D Model Rigging", zh: "Live2D模型绑定" },
    "home.package": { en: "Package Information", zh: "套餐信息" },
    "home.baseprice": { en: "Base Price", zh: "基础价格" },
    "home.details": { en: "Details", zh: "详情" },
    "home.addons": { en: "Rigging Add-ons", zh: "绑定附加服务" },
    "home.arkit": { en: "Vbridger/Vitamins ARkit", zh: "Vbridger/Vitamins ARkit" },
    "home.toggle": { en: "Toggle Expressions", zh: "切换表情" },
    "home.tongue": { en: "Tongue Out", zh: "吐舌头" },
    "home.extra": { en: "Extra Accessories & Items", zh: "额外配件与物品" },
    "home.tos": { en: "Terms of Service", zh: "服务条款" },
    "home.tosread": { en: "Please read before commissioning.", zh: "委托前请阅读。" },
    "home.closed": { en: "Commission closed indefinitely", zh: "委托无限期关闭" },
    "home.contact": { en: "Please contact me at <a href='mailto:Lanaoicomms@gmail.com'>Lanaoicomms@gmail.com</a> with the subject [COMMISSION INQUIRY] if you have any questions!", zh: "如有任何问题，请发送邮件至 <a href='mailto:Lanaoicomms@gmail.com'>Lanaoicomms@gmail.com</a>，主题为 [COMMISSION INQUIRY]！" },
    "home.apply": { en: "Apply Form & Email", zh: "申请表格与邮件" },
    "home.showcases": { en: "Showcases", zh: "作品展示" },
    "home.ytfooter": { en: "Find out more on my YouTube channel", zh: "在我的YouTube频道了解更多" },

    // About
    "about.title": { en: "About", zh: "关于" },
    "about.bio": { en: "Hi, I'm Lanaoi, a full-time Live2D rigger. I started on Live2D in 2020 and won the 'Future Award' in the Live2D Creative Awards 2023 contest. I'm glad you're interested in my work!", zh: "你好，我是Lanaoi，全职Live2D绑定师。我从2020年开始制作Live2D，并在2023年Live2D创意大赛中获得了"未来奖"。很高兴你对我的作品感兴趣！" },
    "about.achievements": { en: "Achievements", zh: "成就" },
    "about.award2023": { en: "Live2D Creative Award 2023 'Future Award' winner", zh: "2023年Live2D创意大赛「未来奖」获奖者" },
    "about.buzz2023": { en: "2023 Live2D Buzz Creator", zh: "2023年Live2D热门创作者" },
    "about.girls2022": { en: "2022 Customizable Live2D Model 'Lanaoi Girls' College'", zh: "2022年可自定义Live2D模型「Lanaoi Girls' College」" },
    "about.sns": { en: "SNS Platform", zh: "社交平台" },

    // Price
    "price.title": { en: "Pricing", zh: "价格" },
    "price.closed": { en: "- COMMISSION CLOSED -", zh: "- 委托已关闭 -" },
    "price.individual": { en: "Individual Rigging Package", zh: "个人绑定套餐" },
    "price.individual1": { en: "This package is designed for individual clients with limited budgets and flexible timeframes.", zh: "此套餐专为预算有限、时间灵活的个人客户设计。" },
    "price.individual2": { en: "The primary distinction from the professional version is that this package allows a limited number of revisions, and strict deadlines may not always be met.", zh: "与专业版的主要区别在于，此套餐允许有限次数的修改，且不一定能严格遵守截止日期。" },
    "price.individual3": { en: "The rigging quality is the same as the professional package.", zh: "绑定质量与专业套餐相同。" },
    "price.pro": { en: "Professional Rigging Package", zh: "专业绑定套餐" },
    "price.pro1": { en: "This package is intended for clients with high demands, such as VTuber agencies, companies, and any clients requiring contract signing.", zh: "此套餐面向有高要求的客户，如VTuber经纪公司、企业以及需要签合同的客户。" },
    "price.pro2": { en: "This package offers extensive revision services within my capabilities. Deadlines will be strictly adhered to unless unforeseen circumstances arise.", zh: "此套餐在我能力范围内提供广泛的修改服务。除非出现不可预见的情况，否则将严格遵守截止日期。" },
    "price.features": { en: "Model Features", zh: "模型特性" },
    "price.f1": { en: "Head & body XYZ angle movements", zh: "头部和身体XYZ角度运动" },
    "price.f2": { en: "Smooth physics (including bouncy eyes, mouth and body physics)", zh: "流畅的物理效果（包括弹性眼睛、嘴巴和身体物理）" },
    "price.f3": { en: "Facial expression tracking (angry, happy and surprised eyes)", zh: "面部表情追踪（生气、开心和惊讶的眼睛）" },
    "price.f4": { en: "AEIOU mouth shapes and mouth X tracking", zh: "AEIOU嘴型和嘴巴X追踪" },
    "price.f5": { en: "Three free toggle expressions", zh: "三个免费切换表情" },
    "price.f6": { en: "Breathing", zh: "呼吸效果" },
    "price.addons": { en: "Add-ons", zh: "附加服务" },
    "price.th.package": { en: "Package", zh: "套餐" },
    "price.th.price": { en: "Price (USD)", zh: "价格（美元）" },
    "price.th.workload": { en: "Workload", zh: "工期" },
    "price.td.individual": { en: "Individual", zh: "个人" },
    "price.td.professional": { en: "Professional", zh: "专业" },
    "price.td.days": { en: "30~60+ days", zh: "30~60+天" },

    // Addons
    "addons.title": { en: "Rigging Add-ons", zh: "绑定附加服务" },
    "addons.th.title": { en: "Title", zh: "项目" },
    "addons.th.price": { en: "Price (USD)", zh: "价格（美元）" },
    "addons.arkit": { en: "Vbridger/Vitamins ARkit", zh: "Vbridger/Vitamins ARkit" },
    "addons.tongue": { en: "Tongue Out", zh: "吐舌头" },
    "addons.cheek": { en: "Cheek Puff", zh: "鼓腮帮" },
    "addons.lipbite": { en: "Lip bite toggle", zh: "咬唇切换" },
    "addons.toggle": { en: "Toggle Expressions", zh: "切换表情" },
    "addons.extras": { en: "Extra Accessories & Items", zh: "额外配件与物品" },
    "addons.animation": { en: "Animation", zh: "动画" },
    "addons.arkit.title": { en: "Vbridger/Vitamins ARkit", zh: "Vbridger/Vitamins ARkit" },
    "addons.arkit.note": { en: "*If you commission this, it is recommended to always connect to VB/VTM while using the model, otherwise, the model expression will not work properly.", zh: "*如果您委托了此项目，建议在使用模型时始终连接VB/VTM，否则模型表情将无法正常工作。" },
    "addons.tongue.title": { en: "Tongue Out", zh: "吐舌头" },
    "addons.tongue.1": { en: "Can only be toggled or face-captured.", zh: "只能切换或面部捕捉。" },
    "addons.tongue.2": { en: "If it's a toggle, the mouth shape will be locked when toggled.", zh: "如果是切换模式，切换时嘴型将被锁定。" },
    "addons.tongue.3": { en: "If it's face-captured, mouth shape changes will be captured.", zh: "如果是面部捕捉模式，嘴型变化将被捕捉。" },
    "addons.cheek.title": { en: "Cheek Puff", zh: "鼓腮帮" },
    "addons.cheek.1": { en: "Can be toggled and face-captured.", zh: "可以切换和面部捕捉。" },
    "addons.cheek.2": { en: "It is included in VB/VTM rigging.", zh: "包含在VB/VTM绑定中。" },
    "addons.lipbite.title": { en: "Lip Bite", zh: "咬唇" },
    "addons.lipbite.1": { en: "Toggled only", zh: "仅切换" },
    "addons.toggle.title": { en: "Toggle Expressions", zh: "切换表情" },
    "addons.toggle.1": { en: "Blush/heart eyes/floating stars/tears etc. $20 each", zh: "脸红/爱心眼/飘星/泪水等 每个$20" },
    "addons.toggle.2": { en: "Eyebrows and mouth shape change (slanted eyebrows, mad face, cartoon face etc.) $30+ each", zh: "眉毛和嘴型变化（斜眉、愤怒脸、卡通脸等）每个$30+" },
    "addons.toggle.3": { en: "Animated teardrops $60", zh: "动态泪滴 $60" },
    "addons.items.title": { en: "Extra Arms & Items", zh: "额外手臂与物品" },
    "addons.items.1": { en: "Extra Arms $40+", zh: "额外手臂 $40+" },
    "addons.items.2": { en: "Item fade-out toggle $20", zh: "物品淡出切换 $20" },
    "addons.items.3": { en: "Animal ears $80", zh: "动物耳朵 $80" },
    "addons.items.4": { en: "Tail $40+", zh: "尾巴 $40+" },
    "addons.items.5": { en: "Wings $60+", zh: "翅膀 $60+" },
    "addons.items.6": { en: "Glasses $20", zh: "眼镜 $20" },
    "addons.items.7": { en: "Horns $50+", zh: "角 $50+" },
    "addons.items.8": { en: "Trackable pet/mascot $100+", zh: "可追踪宠物/吉祥物 $100+" },
    "addons.items.9": { en: "Extra hairstyle $80+", zh: "额外发型 $80+" },
    "addons.movement.title": { en: "Movement Toggles", zh: "动作切换" },
    "addons.movement.1": { en: "Large angle body lean forward $200+", zh: "大角度身体前倾 $200+" },
    "addons.movement.2": { en: "Leg spread pose change $50+", zh: "腿部展开姿势变化 $50+" },
    "addons.movement.3": { en: "Turn into Chibi $400+", zh: "变成Q版 $400+" },
    "addons.movement.4": { en: "Feel free to discuss any other ideas with me!", zh: "欢迎与我讨论任何其他想法！" },
    "addons.anim.title": { en: "Animation", zh: "动画" },
    "addons.anim.1": { en: "Walking animation $300+", zh: "走路动画 $300+" },
    "addons.anim.2": { en: "Waving hand $100", zh: "挥手 $100" },
    "addons.anim.3": { en: "Lost tracking sleeping animation $40+", zh: "失去追踪睡眠动画 $40+" },
    "addons.anim.4": { en: "Idle animations for accessories (e.g. magic items, falling stars, smoke) $50+", zh: "配件待机动画（如魔法物品、流星、烟雾）$50+" },
    "addons.anim.5": { en: "Feel free to discuss any other ideas with me!", zh: "欢迎与我讨论任何其他想法！" },
    // ARkit features
    "addons.arkit.f1": { en: "Eyes Squint", zh: "眯眼" },
    "addons.arkit.f2": { en: "Jaw movement", zh: "下巴运动" },
    "addons.arkit.f3": { en: "Mouth X", zh: "嘴巴X" },
    "addons.arkit.f4": { en: "Mouth shrug", zh: "嘴巴耸动" },
    "addons.arkit.f5": { en: "Mouth funnel", zh: "嘴巴漏斗" },
    "addons.arkit.f6": { en: "Lip press", zh: "抿嘴" },
    "addons.arkit.f7": { en: "Grin", zh: "咧嘴笑" },
    "addons.arkit.f8": { en: "Mouth pucker & widen", zh: "嘴巴噘起与张大" },
    "addons.arkit.f9": { en: "Cheek Puff", zh: "鼓腮帮" },

    // TOS
    "tos.title": { en: "Terms of Service", zh: "服务条款" },
    "tos.1": { en: "By commissioning me, you agree to these terms.", zh: "委托我即表示您同意这些条款。" },
    "tos.2": { en: "The models are suitable for commercial use.", zh: "模型适合商业使用。" },
    "tos.3": { en: "Prices are in USD, and payments will be made via PayPal invoice.", zh: "价格以美元计，付款通过PayPal发票进行。" },
    "tos.4": { en: "If the slot is scheduled for 5 months later, a $200 reservation fee (deducted from the total fee) is required to secure it.", zh: "如果排期在5个月后，需要支付$200预约费（从总费用中扣除）来确保名额。" },
    "tos.5": { en: "Once I\u2019m ready to begin your commission, an upfront payment of 50% of the total fee will need to be made before I start.", zh: "一旦我准备开始您的委托，需要在开始前预付总费用的50%。" },
    "tos.6": { en: "I may choose to accept commissions that align with my preferred art style or design.", zh: "我可能会选择接受符合我偏好的艺术风格或设计的委托。" },
    "tos.7": { en: "Please be specific with your requirements. Revisions may incur a minor fee.", zh: "请明确您的要求。修改可能会产生少量费用。" },
    "tos.8": { en: "The Live2D model file will be sent to you upon full payment via Google Drive or Email (or anything convenient for you).", zh: "Live2D模型文件将在全额付款后通过Google Drive或电子邮件（或任何方便您的方式）发送给您。" },
    "tos.9": { en: "If you need the PSD or rigging source file, please discuss it with me. There will be an extra fee for buying the source file.", zh: "如果您需要PSD或绑定源文件，请与我讨论。购买源文件将收取额外费用。" },
    "tos.10": { en: "Refunds will not be provided once the model is completed.", zh: "模型完成后不提供退款。" },
    "tos.11": { en: "Partial refunds are allowed before the completion of the model. The refund amount will depend on the stage of progress. After the refund, your commission will be discontinued.", zh: "模型完成前允许部分退款。退款金额取决于进度阶段。退款后，您的委托将终止。" },
    "tos.12": { en: "Please credit me (Twitter@Lanaoi719) when using my work on any social media platform. You may refer to me as your Live2D mama, papa or rigger.", zh: "在任何社交媒体平台使用我的作品时，请注明我（Twitter@Lanaoi719）。您可以称呼我为您的Live2D妈妈、爸爸或绑定师。" },
    "tos.13": { en: "Your model may be used as a sample and shared on my social media in the form of screenshots, JPEG/GIF images, or showcase videos. Please inform me if you wish to keep it confidential.", zh: "您的模型可能会作为样品以截图、JPEG/GIF图片或展示视频的形式在我的社交媒体上分享。如果您希望保密，请告知我。" },
    "tos.14": { en: "If you have any further questions, please contact me at <a href='mailto:Lanaoicomms@gmail.com'>Lanaoicomms@gmail.com</a> with the subject line [COMMISSION INQUIRY].", zh: "如有任何其他问题，请发送邮件至 <a href='mailto:Lanaoicomms@gmail.com'>Lanaoicomms@gmail.com</a>，主题为 [COMMISSION INQUIRY]。" },

    // Footer
    "footer": { en: "\u00a9 2024 Lanaoi. All rights reserved.", zh: "\u00a9 2024 Lanaoi. 保留所有权利。" }
  };

  function setLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (T[key] && T[key][lang]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = T[key][lang];
        } else {
          el.innerHTML = T[key][lang];
        }
      }
    });
    document.documentElement.lang = lang;
    var btn = document.getElementById("langToggle");
    if (btn) btn.textContent = lang === "en" ? "中文" : "EN";
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var saved = "en";
  try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    setLang(saved);
    var btn = document.getElementById("langToggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var cur = document.documentElement.lang === "en" ? "zh" : "en";
        setLang(cur);
      });
    }
  });
})();
