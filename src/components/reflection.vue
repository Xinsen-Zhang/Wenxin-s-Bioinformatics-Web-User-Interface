<template>
    <div id="reflection">
        <!-- <h1>Reflection</h1> -->
        <div class="pointer yellow h1 position-relative subtitle pt-5" @click="togglePocket()">Happy 2019 Spring Festival !!!
            <div class="col-3 pocket-hide" id="red-pocket">
                <img src="http://python-zhang.oss-cn-shanghai.aliyuncs.com/cat/assets/reflection/red-pocket.gif" alt="">
                <span class="d-block iconfont icon-close" id="close"></span>
            </div>
        </div>

        <div class="container-fluid pt-5" id="context">
            <div class="row text-left yellow">
                <p>
                I chose this course for My goal after undergraduate is to go to the United States to study Bioinformatics or Computational Biology or Biostatistics. I was looking forward to having a better understanding of the profile of Bioinformatics to help me to set the direction of studying abroad.
                <p/>
                <p>
                During the eight-week study, with the help of Professor Ming Chen and several teaching assistants, I learned about the general information of bioinformatics, refreshed the superficial concept of the leopard in the letter tube, and mastered some skills in using database to analyse sequences. I harvested a lot.
                <p/>
                <p>
                After finishing this lesson, my understanding of Bioinformatics became: Bioinformatics is a multidisciplinary subject, which has the closest relationship with computer and mathematics. It focuses on the mining, analysis and integration of high-throughput data. Mostly for Medicine and Pharmacy. Only a person with interdisciplinary knowledge can learn this subject well.
                <p/>
                <p>
                The vast array of gene sequences and protein sequences consisting of four gene codes and more than 20 amino acids in the databases, splendid DNA, RNA and protein structures let me experience the beauty of biological fine structure. Of course, these are superficial things. The algorithms and principles behind these predicted models are the most fascinating, which makes me more determined to go to the United States to learn Bioinformatics.
                <p/>
                <p>
                Learned people know they can never learn enough. Now I am a child who knows nothing about it. I need to learn too much knowledge and skills. The next year and a half of my life will definitely be rich and interesting.
                <p/>
                <p>
                Bioinformatics is not an emerging concept. The databases of Bioinformatics in the United States, Europe and Japan have already been very mature, however, unfortunately, China is still far behind in this region. But at least this shows that Bioinformatics has Prosperity prospects in China. China is of urgent needs to have more fresh power to inject the research field of Bioinformatics.
                <p/>

                <ul class="no-indent d-block no-padding n-padding">
                    <span class="h3 pb-2 d-block">My Harvest:</span>
                    <li>1. Protein sequence obtained with the gene sequence of my interest</li>
                    <li>2. Protein domains obtained through protein sequences</li>
                    <li>3. predicted structure models and functions</li>
                    <li>4. Metabolic network</li>
                    <li>5. Access a variety of databases, such as NCBI, Genbank, EMBL, DDBJ, PDB, Uniprot, Interpro, Pfam, KEGG, STRING, Pathguide</li>
                    <li>6. Tried some tools, such as python, R, Swiss Model, i-Tasser, Cytoscape, Weblogo</li>
                    <li>7. Learnt html, CSS, Javascript and wrote a simple web page</li>
                </ul>


                <ul class="no-indent d-block no-padding no-margin">
                    <span class="h3 pb-2 d-block">A little suggestion:</span>
                    <li>1. May the teacher release the contents of the next lesson in advance for everyone to preview and understand the key points of the lesson?</li>
                    <li>2. May the teaching assistants put the software package and teaching ppts to the QQ group in advance, saving some time for the students to download the software?</li>
                    <li>3. May we have more teaching assistants in each class? It seems that when the students have problems, the assistants are not enough.</li>
                    <li>4. It seemed that the logic of the lectures could be more clear, may be because the content of the Bioinformatics is complex, it sounds a little confusing.</li>
                </ul>


                <ul class="no-indent d-block n-margin no-padding">
                    <span class="h3 pb-2 d-block">Acknowlegement:</span>
                    <li>It is my honor to be chosen from hundreds of students to take the 30 students class.</li>
                    <li>I would like to thank Professor Chen Ming for his kind and friendly teaching. He is very considerate to the students. I hope that on my road of learning, I could be happy every day like him —— study my favorite, and become more and more happy.</li>
                    <li>Thanks to the careful guidance of the four teaching assistants Dahui Hu, Bentao She, Yan Wu and Sida Li, I learned the initial use of various tools and software.</li>
                </ul>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'reflection',
    data () {
        return {
            pocketShow: false
        }
    },
    methods: {
        togglePocket () {
            this.pocketShow = !this.pocketShow
        }
    },
    watch: {
        pocketShow () {
            const redPocket = document.getElementById('red-pocket')
            if (this.pocketShow) {
                // redPocket.style.transform = 'translate(-50%, 0rem) scale(1.0)'
                // redPocket.style.opacity = '1.0'
                redPocket.classList.add('pocket-show')
                redPocket.classList.remove('pocket-hide')
            } else {
                redPocket.classList.add('pocket-hide')
                redPocket.classList.remove('pocket-show')
                // redPocket.style.transform = 'translate(-50%, -100rem) scale(0.0)'
                // redPocket.style.opacity = '0.0'
            }
        }
    }
}
</script>

<style scoped>
#reflection {
    background: url('http://python-zhang.oss-cn-shanghai.aliyuncs.com/cat/assets/reflection/background.jpg') center top no-repeat;
    background-size: 100% 100%;
    /* z-index: 10; */
}
.pointer {
    cursor: pointer;
}

.yellow {
    color: #ffc30c;
}

.subtitle {
    z-index: 1;
    padding-top: 1rem;
    padding-bottom: 2rem;
}

#context p {
    text-indent: 2em;
}

#context li {
    margin-left: 2rem;
}

#context {
    font-size: 1.5rem;
    text-indent: 2em;
}

#context ul {
    list-style: none;
}

p {
    margin-bottom: 0rem !important;
    margin-top: 1rem !important;
}

.no-indent {
    text-indent: 0 !important;
}

#red-pocket {
    position: absolute;
    left: 50%;
    /* box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.5); */
    transition: all 2s linear 0;
    overflow: visible !important;
}

#red-pocket img {
    width: 100%;
    height: 100%;
}

.pocket-show {
    transform: translate(-50%, 0rem) scale(1.0);
    opacity: 1.0;
}

.pocket-hide {
    transform: translate(-50%, -100rem) scale(0.0);
    opacity: 0.0;
}

#close {
    font-size: 3rem;
    line-height: 3rem;
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: 1.2rem;
    top: 0.2rem;
    color: #000;
    z-index: 99999;
}
</style>
