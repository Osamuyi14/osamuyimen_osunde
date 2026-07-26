  // Project detail data. Materials link to files stored in ./projects/<folder>/ alongside this HTML.
  // When deploying, keep the "projects" folder next to index.html (or update these paths to your host).
  const PROJECTS = {
    a1: {
      tag:'Analytics', title:'Automobile Risk Classification',
      desc:'A three-class, imbalanced classification problem on an automobile dataset for the MSc Machine Learning and Pattern Recognition module. I benchmarked classical models against a deep learning approach, paying close attention to how each handled the class imbalance rather than just chasing raw accuracy.',
      stack:['Python','scikit-learn','Deep Learning','Imbalanced Classification'],
      links:[
        {label:'View written report (PDF)', href:'projects/automobile-classification/Osamuyimen_Osunde_20093878_Task2.pdf'},
        {label:'Model notebook (.ipynb)', href:'projects/automobile-classification/Osamuyimen_Osunde_Abhishek_Gupta_Task1.ipynb'},
      ]
    },
    a2: {
      tag:'Analytics', title:'Bank Telemarketing Prediction',
      desc:'Built on the UCI Bank Marketing dataset for the Programming for Data Analysis module. The interesting part wasn\'t the model, it was catching that call duration leaks the outcome, removing it, and engineering a "contacted before" feature instead. Decision Tree and Random Forest were then compared on the honest, leakage-free version of the problem.',
      stack:['Python','Pandas','Feature Engineering','Decision Tree','Random Forest'],
      links:[
        {label:'View full report (PDF)', href:'projects/bank-telemarketing/Osamuyi_Osunde_CA2_Report_revised.pdf'},
        {label:'View slide deck (PDF)', href:'projects/bank-telemarketing/Osamuyi_Osunde_CA2_Presentation.pdf'},
        {label:'Model notebook (.ipynb)', href:'projects/bank-telemarketing/Osamuyimen_Code_1.ipynb'},
      ]
    },
    a3: {
      tag:'Analytics', title:'Statistical Modelling Suite',
      desc:'A three part statistics assignment done in Python rather than the R oriented brief it was set in: binomial GLM logistic regression on Telco customer churn, a Bayesian/Poisson conjugate prior derivation worked through by hand, and an ARIMA time series forecast on the NASDAQ Composite pulled live via yfinance.',
      stack:['Python','GLM / Logistic Regression','Bayesian Inference','ARIMA'],
      links:[
        {label:'View full report (PDF)', href:'projects/statistical-modelling/Purity_Osamuyimen_Ayomide_CA2.pdf'},
        {label:'Analysis code (.R)', href:'projects/statistical-modelling/Purity_Osamuyimen_Ayomide_Code.R'},
      ]
    },
    a4: {
      tag:'Analytics', title:'Student Exam Score Prediction',
      desc:'An independent regression project on a 6,600+ row student performance dataset. After cleaning and encoding, I tuned a Support Vector Regression model across multiple kernels with GridSearchCV, alongside Decision Tree and Random Forest baselines. SVR came out on top at roughly 84% R².',
      stack:['SVR','GridSearchCV','Random Forest','R² ≈ 0.84'],
      links:[],
      note:'Written up as a LinkedIn post, link available on request. Notebook not yet published here.'
    },
    a5: {
      tag:'Analytics', title:'AI Student Impact Modelling',
      desc:'A larger scale regression task on a 50,000 row dataset, predicting post semester GPA. Ridge Regression, Random Forest and SVR were all tuned with GridSearchCV to compare how a regularised linear model held up against ensemble and kernel methods at this scale.',
      stack:['Ridge Regression','Random Forest','SVR','GridSearchCV'],
      links:[],
      note:'Coursework notebook, happy to walk through it directly, just get in touch.'
    },
    a6: {
      tag:'Analytics', title:'Neural Network Forward Pass',
      desc:'A from scratch implementation of a neural network forward pass in a Colab notebook, with no framework shortcuts. Built as groundwork before the deep learning components of the MSc, to make sure the mechanics behind the libraries were actually understood.',
      stack:['NumPy','Colab','Deep Learning Fundamentals'],
      links:[],
      note:'Notebook available on request.'
    },
    a7: {
      tag:'Analytics', title:'Indomethacin Pharmacokinetics Report',
      desc:'A statistical report in R modelling how the drug indomethacin clears from the bloodstream over time, with plots embedded directly in the write up. One of the earliest projects on the MSc, and the clearest line back to the physics degree: the same instinct for modelling a system, applied to a new kind of data.',
      stack:['R','Pharmacokinetics','Statistical Modelling'],
      links:[],
      note:'Report available on request.'
    },
    a8: {
      tag:'Analytics', title:'Financial Planning and Savings Optimisation System',
      desc:'A Python programming assignment (MSc CA1) built as three connected systems: a savings simulator modelling monthly growth under variable salary and interest rates, a bisection search algorithm to solve for the savings rate needed to hit a target balance, and a separate rule based, object oriented timetabling system enforcing capacity and clash constraints.',
      stack:['Python','OOP','Bisection Search','Input Validation'],
      links:[
        {label:'View reflective report (PDF)', href:'projects/financial-planning/Osamuyimen_Osunde_CA_One_Report.pdf'},
        {label:'Full notebook (.ipynb)', href:'projects/financial-planning/Osamuyimen_Osunde_Programming_CA.ipynb'},
      ]
    },
    b1: {
      tag:'Front-End', title:'Xurya: Renewable Energy Landing Page',
      desc:'A full rebuild of a renewable energy company\'s landing page in React, TypeScript and Vite. Built with dark/light mode, scroll triggered animation, a live metrics style dashboard section, and a modular component structure designed to be easy to extend.',
      stack:['React','TypeScript','Vite','Component Architecture'],
      links:[
        {label:'GitHub repository', href:'https://github.com/Osamuyi14', external:true},
      ],
      note:'Live demo link coming soon, ask and I\'ll share the deployed URL directly.'
    },
    b2: {
      tag:'Front-End', title:'Prodmast Landing Page',
      desc:'An independent landing page project focused on clean layout discipline and component reuse, with brand consistent typography and grid work using Bootstrap alongside custom styling.',
      stack:['React','CSS','Bootstrap'],
      links:[
        {label:'GitHub repository', href:'https://github.com/Osamuyi14', external:true},
      ]
    },
    b3: {
      tag:'Front-End', title:'Python CLI Utilities',
      desc:'A set of standalone command line scripts, written outside of coursework, applying front-end problem solving habits to plain Python. This was the earliest crossover point between the two disciplines this site is about.',
      stack:['Python','CLI'],
      links:[
        {label:'GitHub repository', href:'https://github.com/Osamuyi14', external:true},
      ]
    }
  };

  // React powers the project detail modal. Rows dispatch a custom event; the
  // React component listens for it and renders itself, so no JSX/Babel step is needed.
  const { useState, useEffect } = React;

  function ProjectModal(){
    const [projectId, setProjectId] = useState(null);

    useEffect(()=>{
      function handleOpen(e){ setProjectId(e.detail.id); }
      function handleKey(e){ if(e.key === 'Escape') setProjectId(null); }
      window.addEventListener('open-project-modal', handleOpen);
      document.addEventListener('keydown', handleKey);
      return ()=>{
        window.removeEventListener('open-project-modal', handleOpen);
        document.removeEventListener('keydown', handleKey);
      };
    }, []);

    if(!projectId) return null;
    const p = PROJECTS[projectId];
    if(!p) return null;

    return React.createElement('div', {
      className:'modal-overlay open',
      onClick:(e)=>{ if(e.target.classList.contains('modal-overlay')) setProjectId(null); }
    },
      React.createElement('div', {className:'modal-panel', role:'dialog', 'aria-modal':'true'},
        React.createElement('button', {
          className:'modal-close', onClick:()=>setProjectId(null), 'aria-label':'Close'
        }, '✕'),
        React.createElement('span', {
          className:'modal-tag',
          style:{ background: p.tag === 'Front-End' ? 'var(--ink)' : 'var(--red)' }
        }, p.tag),
        React.createElement('h3', {className:'modal-title'}, p.title),
        React.createElement('p', {className:'modal-desc'}, p.desc),
        React.createElement('div', {className:'modal-section-label'}, 'Stack'),
        React.createElement('div', {className:'modal-stack'},
          p.stack.map(s => React.createElement('span', {key:s}, s))
        ),
        React.createElement('div', {className:'modal-section-label'}, 'Materials'),
        React.createElement('div', {className:'modal-links'},
          (p.links || []).map(l => React.createElement('a', {
            key:l.href,
            href:l.href,
            target:'_blank',
            rel:'noopener'
          }, l.label, React.createElement('span', {className:'arrow'}, '↗')))
        ),
        p.note ? React.createElement('div', {className:'modal-note'}, p.note) : null
      )
    );
  }

  ReactDOM.createRoot(document.getElementById('modalRoot')).render(React.createElement(ProjectModal));

  document.querySelectorAll('.proj-row').forEach(row=>{
    function open(){ window.dispatchEvent(new CustomEvent('open-project-modal', {detail:{id: row.dataset.proj}})); }
    row.addEventListener('click', open);
    row.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); }
    });
  });
