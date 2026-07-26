  // Angular powers the Skill Matrix section (manual bootstrap, so load order is deterministic).
  angular.module('portfolioApp', []).controller('SkillsCtrl', function($scope){
    $scope.tracks = [
      {
        num:'TRACK 01', title:'Front-End Engineering',
        desc:'Three years shipping interfaces professionally. This is the base the analytics work stands on.',
        chips:[
          {label:'React', lead:true}, {label:'TypeScript', lead:true}, {label:'Angular'},
          {label:'JavaScript'}, {label:'HTML5'}, {label:'CSS3'}, {label:'GraphQL'},
          {label:'D3.js'}, {label:'AG Grid'}, {label:'PrimeNG'}
        ]
      },
      {
        num:'TRACK 02', title:'Data Analytics and ML',
        desc:'The active build: classical ML, deep learning and statistical inference developed through MSc coursework and independent projects.',
        chips:[
          {label:'Python', lead:true}, {label:'R', lead:true}, {label:'SQL'},
          {label:'Power BI'}, {label:'Excel'}, {label:'scikit-learn'},
          {label:'GLM / Logistic Reg.'}, {label:'Bayesian Inference'}, {label:'ARIMA'},
          {label:'Random Forest'}, {label:'SVR'}
        ]
      },
      {
        num:'TRACK 03', title:'Tooling and Platform',
        desc:'The connective layer: version control, notebooks and environments that support both tracks.',
        chips:[
          {label:'Git / GitHub'}, {label:'RStudio'}, {label:'VS Code'},
          {label:'Jupyter & Colab'}, {label:'AWS (beginner)'}, {label:'C++ (beginner)'},
          {label:'Vite'}, {label:'ReportLab'}
        ]
      }
    ];
  });
  angular.bootstrap(document.getElementById('skillsApp'), ['portfolioApp']);
