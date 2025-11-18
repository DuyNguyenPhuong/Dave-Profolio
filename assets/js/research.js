/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
{
  title: "Optimized Waste Water Treatment Operation by Applying Machine Learning and AI (Top 10% YC)",
  authors: "Water Supply & Drainage",
  conferences: "Water Supply & Drainage",
  researchYr: 2025,
  citebox: "popup2",
  image: "assets/images/research-page/award.jpg",
  citation: {
    vancouver:
      "Water Supply & Drainage. Improving Waste Water Treatment Operation by Applying Machine Learning Technology. Water Supply & Drainage. 2022.",
  },
  abstract: "Received top 10% Top best startup Y-Combinator: (https://aisha-assistant-fe-delta.vercel.app/river-map). This project develops an AI-driven system that optimizes the operation of Waste Water Treatment Plants (WWTPs) by modeling and predicting the behavior of the microorganisms essential to the treatment process. Using machine learning algorithms and an AI agent framework, the system simulates microbial activity under varying environmental and operational conditions—such as aeration levels, chemical dosing, sludge age, and influent fluctuations. By learning from historical plant data and running efficient predictive simulations, the model recommends real-time operational adjustments that stabilize water quality, reduce energy consumption, and prevent process failures. The technology has been deployed in functioning WWTPs, where it has demonstrated tangible improvements in treatment efficiency and operational stability. Its real-world impact earned the project the Gold Medal at the World Invention Creativity Olympic (WICO), recognizing its contribution to modernizing wastewater management with practical, AI-powered decision support.",
  absbox: "absPopup2",
},
{
  title: "Predicting Optimal Operation for Waste Water Treatment Plants",
  authors: "World Invention Creativity Olympic",
  conferences: "World Invention Creativity Olympic",
  researchYr: 2022,
  citebox: "popup3",
  image: "assets/images/research-page/wastewater.jpg",
  citation: {
    vancouver:
      "World Invention Creativity Olympic. Predicting Optimal Operation for Waste Water Treatment Plants. Gold Medal Award.",
  },
  abstract: "Awarded the Gold Medal for developing a system that predicts optimal operation for Waste Water Treatment Plants (WWTPs), currently deployed in 5 real facilities: https://aisha-assistant-fe-delta.vercel.app/river-map. This project develops an AI-driven system that optimizes the operation of Waste Water Treatment Plants (WWTPs) by modeling and predicting the behavior of the microorganisms essential to the treatment process. Using machine learning algorithms and an AI agent framework, the system simulates microbial activity under varying environmental and operational conditions—such as aeration levels, chemical dosing, sludge age, and influent fluctuations. By learning from historical plant data and running efficient predictive simulations, the model recommends real-time operational adjustments that stabilize water quality, reduce energy consumption, and prevent process failures. The technology has been deployed in functioning WWTPs, where it has demonstrated tangible improvements in treatment efficiency and operational stability. Its real-world impact earned the project the Gold Medal at the World Invention Creativity Olympic (WICO), recognizing its contribution to modernizing wastewater management with practical, AI-powered decision support.",
  absbox: "absPopup3",
},
{
  title: "Size Measurement for Translation Look-aside Buffer (TLB) and Cache",
  authors: "Technology and Life",
  conferences: "Technology and Life",
  researchYr: 2024,
  citebox: "popup1",
  image: "assets/images/research-page/tlbResearch.jpg",
  citation: {
    vancouver:
      "Technology and Life. Size Measurement for Translation Look-aside Buffer (TLB) and Cache. Technology and Life. 2024.",
  },
  abstract: "This study examines the hierarchical performance characteristics of modern CPU memory systems by experimentally measuring the sizes and access latencies of L1, L2, L3 caches, and the Translation Look-aside Buffer (TLB). Using a controlled C-based benchmarking approach, we progressively scaled memory access patterns to detect cache boundaries and quantify latency changes. The results reveal distinct performance transitions across cache levels, demonstrate measurable TLB behavior, and highlight the influence of hardware prefetching in contemporary processors. Understanding these characteristics enables developers to design software that aligns with actual hardware behavior, reducing latency and significantly improving throughput. These insights are especially valuable in performance-critical fields—such as high-frequency trading (HFT) and large-scale data processing—where micro-architectural awareness directly translates into computational efficiency. The study provides a practical foundation for optimizing algorithms, data structures, and memory-intensive applications by taking full advantage of modern CPU architecture.",
  absbox: "absPopup1",
},
  // {
  //   title: "A Batch Normalized Inference Network Keeps the KL Vanishing Away",
  //   authors:
  //     "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup1",
  //   image: "assets/images/research-page/inteferenceNetwork.png",
  //   citation: {
  //     vancouver:
  //       "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 1",
  //   absbox: "absPopup1",
  // },

  // {
  //   title: "A Call for More Rigor in Unsupervised Cross-lingual Learning",
  //   authors:
  //     "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup2",
  //   image: "assets/images/research-page/crossLingual.png",
  //   citation: {
  //     vancouver:
  //       "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 2",
  //   absbox: "absPopup2",
  // },

  // {
  //   title:
  //     "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
  //   authors: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup3",
  //   image: "assets/images/research-page/wordRepresentation.png",
  //   citation: {
  //     vancouver:
  //       "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 3",
  //   absbox: "absPopup3",
  // },

  // {
  //   title:
  //     "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
  //   authors:
  //     "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup4",
  //   image: "assets/images/research-page/dialogueState.png",
  //   citation: {
  //     vancouver:
  //       "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 4",
  //   absbox: "absPopup4",
  // },

  // {
  //   title: "Dual Super-Resolution Learning for Semantic Segmentation",
  //   authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup5",
  //   image: "assets/images/research-page/semanticSegmentation.png",
  //   citation: {
  //     vancouver:
  //       "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 5",
  //   absbox: "absPopup5",
  // },

  // {
  //   title: "Deep Unfolding Network for Image Super-Resolution",
  //   authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup6",
  //   image: "assets/images/research-page/deepNetwork.png",
  //   citation: {
  //     vancouver:
  //       "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 6",
  //   absbox: "absPopup6",
  // },

  // {
  //   title:
  //     "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
  //   authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup7",
  //   image: "assets/images/research-page/imageDecomposition.png",
  //   citation: {
  //     vancouver:
  //       "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 7",
  //   absbox: "absPopup7",
  // },
  // {
  //   title:
  //     "Forward and Backward Information Retention for Accurate Binary Neural Networks",
  //   authors:
  //     "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup8",
  //   image: "assets/images/research-page/neuralNetworks.jpg",
  //   citation: {
  //     vancouver:
  //       "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 8",
  //   absbox: "absPopup8",
  // },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
