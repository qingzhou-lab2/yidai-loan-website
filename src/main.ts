// 贷款产品数据
interface LoanProduct {
  id: number;
  name: string;
  amount: string;
  rate: string;
  period: string;
  description: string;
  features: string[];
  badge?: 'hot' | 'new' | 'fast';
  icon: string;
  color: string;
}

// 助贷项目数据
const loanProducts: LoanProduct[] = [
  {
    id: 1,
    name: '企业信用贷',
    amount: '50-500万',
    rate: '年化 4.35% 起',
    period: '1-5年灵活',
    description: '基于企业经营状况和信用评分的无抵押贷款，最高可贷500万，审批快至3天',
    features: ['无需抵押担保', '线上快速审批', '随借随还'],
    badge: 'hot',
    icon: '🏢',
    color: '#3b82f6',
  },
  {
    id: 2,
    name: '房产抵押贷',
    amount: '最高1000万',
    rate: '年化 3.85% 起',
    period: '最长20年',
    description: '以房产作为抵押物，额度高、利率低，适合大额资金需求的企业和个人',
    features: ['额度高至千万', '利率低至3.85%', '支持多次动用'],
    badge: 'new',
    icon: '🏠',
    color: '#10b981',
  },
  {
    id: 3,
    name: '车辆抵押贷',
    amount: '最高100万',
    rate: '年化 8% 起',
    period: '1-5年',
    description: '以车辆作为抵押担保，车辆仍可正常使用，审批便捷，快速放款',
    features: ['GPS不押车', '当天放款', '费用透明'],
    badge: undefined,
    icon: '🚗',
    color: '#f59e0b',
  },
  {
    id: 4,
    name: '供应链金融',
    amount: '按应收账款',
    rate: '低至 5%',
    period: '账期灵活',
    description: '基于核心企业信用，为上下游供应商提供应收账款融资服务',
    features: ['核心企业增信', '应收账款融资', '优化现金流'],
    badge: undefined,
    icon: '🔗',
    color: '#8b5cf6',
  },
  {
    id: 5,
    name: '个人消费贷',
    amount: '1-50万',
    rate: '年化 6% 起',
    period: '最长5年',
    description: '面向个人的消费类贷款，用于装修、旅游、教育等各类消费需求',
    features: ['门槛低易申请', '用途灵活多样', '纯信用无抵押'],
    badge: 'fast',
    icon: '💳',
    color: '#ec4899',
  },
  {
    id: 6,
    name: '税易贷',
    amount: '最高200万',
    rate: '年化 5%',
    period: '1-3年',
    description: '基于企业纳税记录的信用贷款，纳税越多额度越高，纯信用无抵押',
    features: ['以税定贷', '纳税即额度', '纯信用模式'],
    badge: undefined,
    icon: '📊',
    color: '#06b6d4',
  },
];

// 统计数据
const statistics = [
  { value: '10,000+', label: '成功案例', icon: '📝' },
  { value: '98.5%', label: '客户满意度', icon: '⭐' },
  { value: '50+', label: '合作机构', icon: '🏦' },
  { value: '24h', label: '最快放款', icon: '⚡' },
];

// 流程步骤
const processSteps = [
  {
    step: 1,
    title: '在线咨询',
    description: '提交贷款需求',
    icon: '💬',
  },
  {
    step: 2,
    title: '资质评估',
    description: '专业顾问对接',
    icon: '📋',
  },
  {
    step: 3,
    title: '方案定制',
    description: '匹配最优产品',
    icon: '🎯',
  },
  {
    step: 4,
    title: '快速放款',
    description: '全程贴心服务',
    icon: '💰',
  },
];

// 联系方式数据
interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  value: string;
  qrCode: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 'wechat',
    icon: '💬',
    title: '微信咨询',
    value: 'yidai888888',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=weixin://dl/chat/yidai888888',
  },
  {
    id: 'phone',
    icon: '📞',
    title: '电话咨询',
    value: '400-888-9999',
    qrCode: '',
  },
  {
    id: 'email',
    icon: '✉️',
    title: '邮箱联系',
    value: 'service@yidai.com',
    qrCode: '',
  },
];

// 渲染导航栏
function renderNavbar(): string {
  return `
    <nav class="navbar glass-dark" id="navbar">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <div class="flex items-center space-x-2">
            <div class="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              易贷宝
            </div>
            <div class="hidden sm:block text-sm text-gray-600 ml-2">专业助贷服务平台</div>
          </div>
          
          <div class="hidden md:flex items-center space-x-8">
            <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">首页</a>
            <a href="#products" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">贷款产品</a>
            <a href="#process" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">服务流程</a>
            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">关于我们</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">联系我们</a>
          </div>
          
          <div class="flex items-center space-x-4">
            <a href="#contact" class="btn-primary text-sm py-2 px-4 sm:py-3 sm:px-6">
              立即咨询
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;
}

// 渲染英雄区域
function renderHero(): string {
  return `
    <section id="home" class="relative min-h-screen flex items-center gradient-primary overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in-up">
            <div class="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              🚀 专业助贷服务，值得信赖
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              轻松解决<br/>
              <span class="text-yellow-300">资金周转</span>难题
            </h1>
            <p class="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              易贷宝汇聚50+优质金融机构，为您提供最合适的贷款方案。<br/>
              专业顾问一对一服务，让贷款更简单、更便捷。
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#products" class="btn-primary text-center">
                查看贷款产品
              </a>
              <a href="#contact" class="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-600 text-center">
                免费咨询
              </a>
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
              ${statistics.map(stat => `
                <div class="text-center sm:text-left">
                  <div class="text-2xl sm:text-3xl font-bold text-white mb-1" data-counter>${stat.value}</div>
                  <div class="text-sm text-blue-100">${stat.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="hidden lg:flex justify-center animate-fade-in">
            <div class="relative">
              <div class="w-96 h-96 bg-white/10 backdrop-blur-lg rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-center items-center">
                  <div class="text-8xl mb-6 animate-float">💰</div>
                  <div class="text-white text-3xl font-bold mb-2">快速放款</div>
                  <div class="text-blue-100 text-center">最快24小时到账</div>
                  <div class="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full">
                    年化利率低至 3.85%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  `;
}

// 渲染贷款产品卡片
function renderProductCard(product: LoanProduct): string {
  const badgeHTML = product.badge
    ? `<span class="badge badge-${product.badge}">${product.badge === 'hot' ? '热门' : product.badge === 'new' ? '新品' : '极速'}</span>`
    : '';

  return `
    <div class="card-interactive bg-white rounded-2xl p-6 sm:p-8 shadow-card group cursor-pointer" data-product-id="${product.id}">
      <div class="flex items-start justify-between mb-4">
        <div class="w-14 h-14 rounded-xl flex items-center justify-center text-3xl card-icon transition-transform duration-300" style="background: ${product.color}20;">
          ${product.icon}
        </div>
        ${badgeHTML}
      </div>
      
      <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        ${product.name}
      </h3>
      
      <p class="text-gray-600 mb-6 line-clamp-2">
        ${product.description}
      </p>
      
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-gray-50 rounded-xl p-4">
          <div class="text-sm text-gray-500 mb-1">贷款额度</div>
          <div class="text-lg font-bold text-gray-900">${product.amount}</div>
        </div>
        <div class="bg-gray-50 rounded-xl p-4">
          <div class="text-sm text-gray-500 mb-1">参考利率</div>
          <div class="text-lg font-bold text-blue-600">${product.rate}</div>
        </div>
      </div>
      
      <div class="space-y-2 mb-6">
        ${product.features.map(feature => `
          <div class="flex items-center text-sm text-gray-600">
            <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            ${feature}
          </div>
        `).join('')}
      </div>
      
      <button class="w-full btn-primary group-hover:shadow-lg">
        立即申请
        <svg class="inline-block w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </button>
    </div>
  `;
}

// 渲染贷款产品区域
function renderProducts(): string {
  return `
    <section id="products" class="py-20 sm:py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            💰 精选产品
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            多样化贷款产品，满足不同需求
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            覆盖企业贷款、个人贷款、抵押贷款等多种类型，总有一款适合您
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          ${loanProducts.map(product => renderProductCard(product)).join('')}
        </div>
      </div>
    </section>
  `;
}

// 渲染流程区域
function renderProcess(): string {
  return `
    <section id="process" class="py-20 sm:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block mb-4 px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
            📋 简单流程
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            四步轻松搞定贷款
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            标准化服务流程，专业团队全程跟进，让贷款变得简单高效
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          ${processSteps.map((step, index) => `
            <div class="relative ${index < processSteps.length - 1 ? 'lg:step-connector' : ''}">
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover-lift">
                <div class="relative inline-block mb-6">
                  <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl text-white shadow-lg">
                    ${step.icon}
                  </div>
                  <div class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                    ${step.step}
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  ${step.title}
                </h3>
                <p class="text-gray-600">
                  ${step.description}
                </p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 渲染优势区域
function renderAdvantages(): string {
  const advantages = [
    {
      icon: '🔒',
      title: '信息安全',
      description: '采用银行级数据加密，保护您的个人信息安全',
    },
    {
      icon: '⚡',
      title: '高效审批',
      description: '智能匹配系统，最快30分钟完成审批流程',
    },
    {
      icon: '💰',
      title: '费用透明',
      description: '无任何隐形费用，所有费用明码标价',
    },
    {
      icon: '🤝',
      title: '专业服务',
      description: '资深顾问一对一服务，全程跟进直到放款',
    },
    {
      icon: '📊',
      title: '方案多样',
      description: '合作50+金融机构，提供最适合的贷款方案',
    },
    {
      icon: '🛡️',
      title: '合规经营',
      description: '正规资质，持牌经营，服务有保障',
    },
  ];

  return `
    <section id="about" class="py-20 sm:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block mb-4 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
            ✨ 选择我们的理由
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            专业、诚信、高效
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            多年行业深耕，积累了丰富的经验和资源，为您提供最优质的贷款服务
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          ${advantages.map((adv, index) => `
            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer hover-lift" style="animation-delay: ${index * 100}ms;">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ${adv.icon}
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                ${adv.title}
              </h3>
              <p class="text-gray-400 group-hover:text-gray-300 transition-colors">
                ${adv.description}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 渲染咨询表单区域
function renderContactForm(): string {
  return `
    <section id="contact" class="py-20 sm:py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              📞 联系我们
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              开启您的贷款之旅
            </h2>
            <p class="text-gray-600 mb-8 text-lg">
              立即联系专业顾问，获取专属贷款方案。您的个人信息将被严格保密。
            </p>
            
            <div class="space-y-4 mb-8">
              ${contactMethods.map(contact => `
                <div class="contact-card bg-white rounded-xl p-4 flex items-center space-x-4 hover:bg-blue-50 transition-colors shadow-sm" data-contact="${contact.id}">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                    ${contact.icon}
                  </div>
                  <div class="flex-1">
                    <div class="text-sm text-gray-500">${contact.title}</div>
                    <div class="font-bold text-gray-900">${contact.value}</div>
                  </div>
                  ${contact.qrCode ? `
                    <div class="qr-code-popup">
                      <img src="${contact.qrCode}" alt="微信二维码" class="w-40 h-40 sm:w-48 sm:h-48 rounded-lg" />
                      <div class="text-center mt-3 text-sm font-medium text-gray-700">
                        扫码添加微信
                      </div>
                    </div>
                    <div class="text-blue-600 text-sm font-medium">
                      悬停查看二维码
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
            
            <div class="bg-blue-50 rounded-2xl p-6">
              <div class="flex items-center mb-3">
                <span class="text-2xl mr-3">⏰</span>
                <span class="font-bold text-gray-900">工作时间</span>
              </div>
              <div class="text-gray-600">
                周一至周日 9:00 - 21:00（全年无休）
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              快速申请贷款
            </h3>
            <form id="loanForm" class="space-y-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  您的姓名 <span class="text-red-500">*</span>
                </label>
                <input type="text" name="name" required placeholder="请输入您的姓名" class="input-field" />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  手机号码 <span class="text-red-500">*</span>
                </label>
                <input type="tel" name="phone" required placeholder="请输入手机号码" class="input-field" />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  贷款类型
                </label>
                <select name="loanType" class="input-field">
                  <option value="">请选择贷款类型</option>
                  ${loanProducts.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  贷款金额
                </label>
                <input type="text" name="amount" placeholder="请输入期望贷款金额（万元）" class="input-field" />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  补充说明
                </label>
                <textarea name="remark" rows="3" placeholder="请简要描述您的贷款需求" class="input-field resize-none"></textarea>
              </div>
              
              <button type="submit" class="w-full btn-primary text-lg py-4">
                提交申请
              </button>
              
              <p class="text-xs text-gray-500 text-center">
                点击提交即表示同意《个人信息保护协议》，我们将保护您的隐私安全
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 渲染页脚
function renderFooter(): string {
  return `
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div class="md:col-span-2">
            <div class="text-3xl font-bold mb-4">易贷宝</div>
            <p class="text-gray-400 mb-4">
              易贷宝是专业的助贷服务平台，致力于为个人和企业提供便捷、高效的贷款服务。
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span>📱</span>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <span>💬</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="font-bold mb-4">快速链接</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#products" class="hover:text-white transition-colors">贷款产品</a></li>
              <li><a href="#process" class="hover:text-white transition-colors">服务流程</a></li>
              <li><a href="#about" class="hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#contact" class="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold mb-4">帮助与支持</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#" class="hover:text-white transition-colors">贷款指南</a></li>
              <li><a href="#" class="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" class="hover:text-white transition-colors">服务条款</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 易贷宝 版权所有 | 营业执照编号：91310000MA1K4BXXXX</p>
          <p class="mt-2">投资有风险，贷款需谨慎 | 本网站仅提供信息展示，不参与任何金融交易</p>
        </div>
      </div>
    </footer>
  `;
}

// 渲染成功提示弹窗
function renderSuccessModal(): string {
  return `
    <div id="successModal" class="fixed inset-0 z-[9999] hidden items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="modalBackdrop"></div>
      <div class="relative bg-white rounded-2xl p-8 max-w-md w-full text-center transform scale-95 opacity-0 transition-all duration-300" id="modalContent">
        <div class="text-6xl mb-4 animate-bounce">🎉</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-3">提交成功！</h3>
        <p class="text-gray-600 mb-6">
          您的贷款申请已提交，我们的专业顾问将在24小时内与您联系。
        </p>
        <button id="closeModal" class="btn-primary">
          我知道了
        </button>
      </div>
    </div>
  `;
}

// 初始化导航栏滚动效果
function initNavbarScroll(): void {
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

// 初始化表单提交
function initForm(): void {
  const form = document.getElementById('loanForm') as HTMLFormElement;
  const modal = document.getElementById('successModal');
  const modalContent = document.getElementById('modalContent');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('closeModal');
  
  if (form && modal && modalContent && modalBackdrop && closeBtn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // 显示成功弹窗
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
      }, 10);
      
      // 重置表单
      form.reset();
    });
    
    // 关闭弹窗
    const closeModal = () => {
      modalContent.classList.remove('scale-100', 'opacity-100');
      modalContent.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
  }
}

// 初始化数字动画
function initCounters(): void {
  const counters = document.querySelectorAll('[data-counter]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target as HTMLElement;
        counter.classList.add('animate-fade-in');
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// 初始化滚动动画
function initScrollAnimations(): void {
  const animatedElements = document.querySelectorAll('.card-interactive, .hover-lift');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('animate-fade-in-up');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  animatedElements.forEach(el => observer.observe(el));
}

// 初始化产品卡片点击
function initProductCards(): void {
  const cards = document.querySelectorAll('[data-product-id]');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const productId = (card as HTMLElement).dataset.productId;
      const product = loanProducts.find(p => p.id === Number(productId));
      
      if (product) {
        // 滚动到联系表单
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          
          // 选中对应的贷款类型
          setTimeout(() => {
            const loanTypeSelect = document.querySelector('select[name="loanType"]') as HTMLSelectElement;
            if (loanTypeSelect && productId) {
              loanTypeSelect.value = productId;
            }
          }, 500);
        }
      }
    });
  });
}

// 平滑滚动到锚点
function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = (anchor as HTMLAnchorElement).getAttribute('href');
      if (targetId) {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// 主应用初始化
export function initApp(): void {
  const app = document.getElementById('app');
  
  if (!app) {
    console.error('App element not found');
    return;
  }
  
  app.innerHTML = `
    ${renderNavbar()}
    ${renderHero()}
    ${renderProducts()}
    ${renderProcess()}
    ${renderAdvantages()}
    ${renderContactForm()}
    ${renderFooter()}
    ${renderSuccessModal()}
  `;
  
  // 初始化各种交互
  initNavbarScroll();
  initForm();
  initCounters();
  initScrollAnimations();
  initProductCards();
  initSmoothScroll();
}
