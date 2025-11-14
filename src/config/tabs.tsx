import { Tab, AppIcon } from '../types';

export const tabsConfig: Tab[] = [
  {
    id: 'hi',
    title: 'Start here!',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Hello!</h2>
        <p>Check out the apps on the right sidebar.</p>
      </div>
    ),
    iconId: '',
    defaultOpen: true,
  },
  {
    id: 'about',
    title: 'About',
    content: (
      <div className="space-y-6">
        {/* Header with image and name */}
        <div className="flex items-start gap-6 pb-6 border-b border-gray-300 dark:border-gray-600">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden">
              <img
                src="/placeholder-avatar.jpg"
                alt="Andrew Jamsa"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a colored circle if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Andrew Jamsa</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              4th Year Student in Chemistry and Computer Science
            </p>
          </div>
        </div>

        {/* Things I do */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Things I do:</h3>
          <p>I am an enthusiast of machine learning and software engineering. 
            I love exploring new neural network architectures and the surprises they bring. 
            Aside from machine learning, I develop web and game applications.</p>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Education:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Honors Bachelor of Science - University of Toronto</li>
          </ul>
        </div>

        {/* Other interests */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Other interests:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>badminton</li>
            <li>music</li>
            <li>anime and Japan</li>
            <li>retro nintendo games (pokemon, mario, etc)</li>
          </ul>
        </div>

        {/* Language proficiency */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Language proficiency:</h3>
          <p>
            I am a fluent speaker of Indonesian and English, I can speak in conversational Chinese and Japanese.
          </p>
        </div>
      </div>
    ),
    iconId: 'about',
    width: 800,
    height: 600,
  },
  {
    id: 'links',
    title: 'Links',
    content: (
      <div className="space-y-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/megz14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://github.com/megz14
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/andrew-jamsa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              www.linkedin.com/in/andrew-jamsa
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="mailto:andrew.jamsa@mail.utoronto.ca"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              andrew.jamsa@mail.utoronto.ca
            </a>
          </div>
        </div>
      </div>
    ),
    iconId: 'links',
    width: 600,
    height: 450,
  },
  {
    id: 'projects',
    title: 'Projects',
    content: (
      <div className="space-y-8">
        {/* Machine Learning Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
            Machine Learning
          </h2>
          <div className="space-y-6">
            {/* AutoCraft */}
            <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2">AutoCraft</h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Collaborators: Andrew Jamsa, Naufal Adityo, Christian Kevin Sidartha, Wage Mareto Ghazanfar
              </p>
              <p className="mb-3">
                <a
                  href="https://www.overleaf.com/project/6912ef5ad21e71857aebbf49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Article
                </a>
              </p>
            </div>

            {/* GPT-from-scratch */}
            <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2">GPT-from-scratch</h3>
              <p className="mb-3">
                A step-by-step implementation of a decoder-only Transformer, a GPT-style model, from scratch using PyTorch. This project was based on the annotation on a lecture by Andrej Karpathy and was intended for learning purposes only.
              </p>
              <p className="mb-3">
                <a
                  href="https://colab.research.google.com/drive/1ZshlqF94EgwiECmV5aP9VzfdFAYyEZPf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Colab
                </a>
              </p>
            </div>

            {/* Food Classification Model */}
            <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Food Classification Model</h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Collaborators: Andrew Jamsa, Edward Liono Lie, Christian Kevin Sidartha, Wage Mareto Ghazanfar
              </p>
              <p className="mb-3">
                <span className="font-medium">Technology used:</span> Python, Pandas, NumPy, Scikit-Learn
              </p>
              <p className="mb-3">
                Developed a benchmarking study on the prediction of individual food preferences (Pizza, Shawarma, or Sushi), based on CSC311 students survey responses. The combination of bag-of-words encoding and normalization was applied across algorithms, such as k-NN, Logistic Regression, Random Forest, Neural Network, and Gradient Boosting. We showed that Gradient Boosting model achieved the most balanced result with over 93% training accuracy and 87% validation accuracy on unseen data. A custom inference pipeline was implemented using only NumPy and Pandas to ensure lightweight deployment under strict computational constraints.
              </p>
              <p className="mb-3">
                <a
                  href="https://docs.google.com/document/d/1y4d6r53YY4iyqMdTul8aC4jIqDjNnOzD4IfV-4LqvDU/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline mr-4"
                >
                  Docs
                </a>
                <a
                  href="https://colab.research.google.com/drive/1ukTHpK5PF5ynDbOB1UvEX6E_nGUxfxKc?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Colab
                </a>
              </p>
            </div>

            {/* 1ClickAI */}
            <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2">1ClickAI</h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Collaborators: Andrew Jamsa,{' '}
                <a
                  href="https://www.linkedin.com/in/abey-george-7ab37898/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Abey George
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/habibah-agianda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Habibah Agianda
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/iqbalnurrahim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Iqbal Nurrahim
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/prateesh-vikram-singh-345a30284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Prateesh Vikram Singh
                </a>
              </p>
              <p className="mb-3">
                <span className="font-medium">Technology used:</span> VertexAI, Figma
              </p>
              <p className="mb-3">
                Innovative healthcare app prototype targeted for early detection in skin abnormalities of patients of post-surgery tumor. The system integrates Google VertexAI to train an EfficientNet-based deep learning model, achieving 88% accuracy in classifying tumor images. The prototype, designed in Figma, enables seamless image uploads and tracking of tumor changes over time. This project was awarded with 3rd place on BioFarma x MIT Hacking Medicine 2023.
              </p>
              <p className="mb-3">
                <a
                  href="https://docs.google.com/presentation/d/1y2KXFv5CjS-sq24BOUdQnVo7d7Mk8udT/edit?usp=sharing&ouid=112514931987173113115&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Presentation
                </a>
              </p>
            </div>

            {/* UCI Heart Disease Classification */}
            <div className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              <h3 className="text-xl font-semibold mb-2">UCI Heart Disease Classification</h3>
              <p className="mb-3">
                <span className="font-medium">Technology used:</span> Python, Pandas, NumPy, Scikit-Learn, Seaborn
              </p>
              <p className="mb-3">
                An end-to-end binary classification pipeline to predict the presence of heart disease. Conducted comprehensive exploratory data analysis (EDA) and feature correlation analysis to inform model selection. Benchmarked three machine learning models (Logistic Regression, K-Nearest Neighbors, Random Forest), systematically optimizing the top performer using RandomizedSearchCV and GridSearchCV. The final tuned model (Logistic Regression) achieved 88.5% accuracy on the test set, with robust evaluation performed via a confusion matrix, classification report, and ROC/AUC curves.
              </p>
              <p className="mb-3">
                <a
                  href="https://colab.research.google.com/drive/1ILzNlDfPpQrLhlG4JqPReB89QpBHdIl1#scrollTo=b583cffb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Colab
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
            Research Experience
          </h2>
          <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-0">CHM399: Quantum Chemistry and Machine Learning for Catalyst Development</h3>
                <h4 className="text-lg font-semibold">Fekl Group, University of Toronto</h4>
              </div>
              <p className="mb-3">
                <span className="font-medium">Technology used:</span> VertexAI, Cluster Computing, Gaussian16, CCDB Alliance Canada, etc.
              </p>
              <p className="mb-3">
              I conducted research on Gibbs free energy in C–H activation reactions involving nickel–oxo catalysts and methane. As part of this work, I scraped and compiled over 50 nickel–oxo compounds from databases such as Scopus, CDB, and Web of Science for computational optimization. I developed and automated submission files for cluster computing to enhance the efficiency of geometry optimization, utilizing the supercomputers hosted by the Digital Research Alliance of Canada. This included creating and managing run files (.sh and .com) as well as analyzing output files (.log). I further investigated the relationship between the topological features of nickel–oxo complexes (Bag-of-Bonds, Persistent Images) and the Gibbs free energy of the Hydrogen Atom Abstraction (HAA) step in the catalytic process, using VertexAI to train, tune, and test multiple regression models, including Ridge, Lasso, EfficientNet, Gradient Boosting, and Kernel Ridge Regression.              </p>
          </div>
        </div>
        {/* Game Development Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
            Game Development
          </h2>
          <div className="space-y-6">
            {/* Adventure Game */}
            <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Adventure Game</h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Collaborators: Andrew Jamsa, Edward Liono Lie, Jad El Asmar, Haris Rehman
              </p>
              <p className="mb-3">
                <span className="font-medium">Technology used:</span> Java, JavaFX, Design patterns
              </p>
              <p className="mb-3">
                Adventure through a world of interconnected rooms, collecting and utilizing various objects to complete quest and challenges. Features include hidden room effects, side quests, and a final boss. Integrated with accessibility and customization such as font size, dark/light/high-contrast color modes, and optional audio cues. Software engineering design patterns, such as Factory, Observer, Strategy, and State, implemented to provide a scalable architecture.
              </p>
            </div>

            {/* Hearts Card Game */}
            <div className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              <h3 className="text-xl font-semibold mb-2">Hearts Card Game</h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Collaborators: Andrew Jamsa,{' '}
                <a
                  href="https://www.linkedin.com/in/wage-mareto-ghazanfar-269684217/?originalSubdomain=ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Wage Mareto Ghazanfar
                </a>
              </p>
              <p className="mb-3">
                <span className="font-medium">Technology used:</span> Godot, C#, polymorphism
              </p>
              <p className="mb-3">
                Full-featured digital implementation of the classic card game Hearts, built using the Godot Engine (version 4) and C#. The codebase implements core gameplay mechanics including deck generation, card interaction, turn sequencing, trick evaluation, score tracking, and a heads-up display for player scores. Polymorphism implemented to enhance scalability of the project to other games, such as truf, capsa, etc.
              </p>
              <p className="mb-3">
                <a
                  href="https://github.com/andrewjamsa/hearts-game/blob/dev/hearts/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Web Development Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
            Web Development
          </h2>
          <div className="space-y-6">
            {/* Instructli */}
            <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Instructli</h3>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                Collaborators: Andrew Jamsa,{' '}
                <a
                  href="https://www.linkedin.com/in/richardwei1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Richard Wei
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/khoi-nguyen-nguyen-vo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Khoi Nguyen Nguyen Vo
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/nizar-shayan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Nizar Shayan
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/gideon-mehna-baa145215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Gideon Mehna
                </a>
                ,{' '}
                <a
                  href="https://www.linkedin.com/in/stephan-scilenyj-3293072a0/?originalSubdomain=ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Stephan Scilenyj
                </a>
              </p>
              <p className="mb-3">
                AI-powered educational platform designed to help learners understand the architecture of single-cycle and 5-stage pipelined processors using RISC-V assembly. My main role in the project was as backend developer, where I constructed the quizzing feature, frontend-backend API contract, and architecture for the database and dynamic question handlers related to arithmetics and instruction 32-bit string.
              </p>
              <p className="mb-3">
                <a
                  href="https://www.instructli.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Project
                </a>
              </p>
            </div>

            {/* Personal Portfolio */}
            <div className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              <h3 className="text-xl font-semibold mb-2">Personal Portfolio</h3>
              <p className="mb-3">
                <span className="font-medium">Technology used:</span> React, TypeScript, Tailwind, JavaScript
              </p>
              <p className="mb-3">
                A personal portfolio website built with React and TypeScript that presents content through a desktop-style interface with draggable floating windows. Implemented using React Context for state management, Tailwind CSS for styling, and mouse events for drag functionality. This is a scalable web-app with scalable architecture for engaging user interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    iconId: 'projects',
    width: 1000,
    height: 600,
  },
  {
    id: 'notes',
    title: 'Notes',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Cool Books</h2>
        <div className="space-y-4">
          <div>
            <a
                  href="https://books.google.ca/books?hl=en&lr=&id=6aC_EAAAQBAJ&oi=fnd&pg=PP16&ots=sbE66cOdf9&sig=U1yHqIJs9PXEU2GOix3QbfVATYo&redir_esc=y#v=onepage&q&f=false"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <h3 className="text-lg font-semibold mb-2">Molecular Representations for Machine Learning</h3>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />
        <h2 className="text-2xl font-bold mb-6">Cool Articles</h2>
        <div className="space-y-4">
          <div>
            <a
                  href="https://medium.com/@AbhiramiVS/softmax-vs-logsoftmax-eb94254445a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <h3 className="text-lg font-semibold mb-2">Why use log softmax instead of softmax?</h3>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />
        <h2 className="text-2xl font-bold mb-6">Annotated ML Notes</h2>
        <div className="space-y-4">
        <div>
            <a
                  href="https://www.overleaf.com/read/dzcqzcdptxxv#42e210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <h3 className="text-lg font-semibold mb-2">Cheatsheet: Introduction to Machine Learning and kNN</h3>
            </a>
          </div>
          <div>
            <a
                  href="https://drive.google.com/file/d/1mOfril2v1CBgOrJzP0i10M_YRv6tbaGx/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <h3 className="text-lg font-semibold mb-2">Probabilistic models</h3>
            </a>
          </div>
          <div>
            <a
                  href="https://drive.google.com/file/d/1JVrD65FpMGHctKSnS19R3nR7wRoG5N7g/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <h3 className="text-lg font-semibold mb-2">Generalization Techniques</h3>
            </a>
          </div>
          <div>
            <a
                  href="https://drive.google.com/file/d/13as9_CMK8rlOOnwHH5CUs476BI_SX0xr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <h3 className="text-lg font-semibold mb-2">Image Classification Models</h3>
            </a>
          </div>
          <div>
            <a
                  href="https://drive.google.com/file/d/17YjAc9Z5zEkm_H-9HRJl8yXfSGSpLc-H/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <h3 className="text-lg font-semibold mb-2">RNN</h3>
            </a>
          </div>
          <div>
            <a
                  href="https://drive.google.com/file/d/1VVtaUBl0guqjPWxmUisVicpoISPpfU95/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <h3 className="text-lg font-semibold mb-2">LSTM</h3>
            </a>
          </div>
          <div>
            <a
                  href="https://www.overleaf.com/read/mrvhkyzjmpjk#9fc44b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <h3 className="text-lg font-semibold mb-2">Probabilistic modelling Part 1: MLE</h3>
            </a>
          </div>
          <div>
            <a
                  href="https://www.overleaf.com/read/snxrqhmbgzrr#443afa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <h3 className="text-lg font-semibold mb-2">Probabilistic modelling Part 2: FB, MAP</h3>
            </a>
          </div>
        </div>
      </div>
    ),
    iconId: 'notes',
    width: 600,
    height: 450,
  },
  {
    id: 'more',
    title: 'More',
    content: (
      <div>
        <p>Coming soon.</p>
      </div>
    ),
    iconId: 'more',
  },
];

export const appIconsConfig: AppIcon[] = [
  {
    id: 'about',
    label: 'About',
    tabId: 'about',
  },
  {
    id: 'links',
    label: 'Links',
    tabId: 'links',
  },
  {
    id: 'projects',
    label: 'Projects',
    tabId: 'projects',
  },
  {
    id: 'notes',
    label: 'Notes',
    tabId: 'notes',
  },
  {
    id: 'more',
    label: 'More',
    tabId: 'more',
  },
];

