import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import showdown from 'showdown'

const converter = new showdown.Converter()

Vue.use(Vuex)

const state = {
    // Lecture 的文章名称
    Lectures: [],
    // Analysis 的文章名称
    Analysises: [],
    // Lecture 的正文内容
    // name
    // context
    lectureContent: {},
    // Analysis 的正文内容
    // name
    // context
    analysisContent: {},
    // 是否是首次打开网页
    isFirst: true
}

const mutations = {
    // 清空 lecture
    clearLectures (state) {
        state.Lectures = []
        state.lectureContent = {}
    },

    // 清空 analysis
    clearAnalysis (state) {
        state.Analysises = []
        state.analysisContent = {}
    },

    // 清空所有数据
    clearAll (state) {
        state.Lectures = []
        state.lectureContent = {}
        state.Analysises = []
        state.analysisContent = {}
    },

    // 添加 lecture 文章信息
    addLecture (state, lecture) {
        state.Lectures.push(lecture)
        // let journey = $('#proteinJourney')
        // journey.on('click', (e) => {
        //     console.log(this)
        //     e.preventDefault()
        // })
        // console.log(journey)
    },
    // 添加 analysis 信息
    addAnalysis (state, analysis) {
        state.Analysises.push(analysis)
    },
    // 刷新当前 lecture 正文内容
    refreshLectureContent (state, content) {
        state.lectureContent = content
    },
    // 刷新当前 analysis 正文内容
    refreshAnalysisContent (state, content) {
        state.analysisContent = content
    },
    // 进入网页
    enter (state) {
        state.isFirst = true
    }
}

const actions = {
    // 刷新 Lecture 列表信息
    refreshLecutres (context) {
        context.commit('clearLectures')
        var url = 'http://39.107.99.64:1221/api/lectures/?&callback=?'
        $.getJSON(url, (data) => {
            data.forEach((element, index) => {
                element['index'] = index
                element['link'] = '/lecture/' + element.id
                element['key'] = 'lecture-' + element['id']
                context.commit('addLecture', element)
            })
        })
    },
    // 刷新 Analysis 列表信息
    refreshAnalysises (context) {
        context.commit('clearAnalysis')
        var url = 'http://39.107.99.64:1221/api/analysis/?&callback=?'
        $.getJSON(url, (data) => {
            data.forEach((element, index) => {
                element['index'] = index
                element['link'] = '/analysis/' + element.id
                element['key'] = 'analysis-' + element['id']
                context.commit('addAnalysis', element)
            })
        })
    },
    // 获取指定 id 的 lecture 正文内容
    getLectureContent (context, id) {
        let url = 'http://39.107.99.64:1221/api/lectures/content/?id=' + id + '&callback=?'
        $.getJSON(url, (data) => {
            let content = {}
            if (data[0]) {
                content.name = data[0].name
                var html = converter.makeHtml(data[0].content)
                html.replace(/"/g, '\'')
                content.context = html
            } else {
                content.name = 'query params are invalid'
                content.context = ''
            }
            context.commit('refreshLectureContent', content)
        })
    },
    // 获取指定 id 的 analysis 正文内容
    getAnalysisContent (context, id) {
        let url = 'http://39.107.99.64:1221/api/analysis/content/?id=' + id + '&callback=?'
        $.getJSON(url, (data) => {
            let content = {}
            if (data[0]) {
                content.name = data[0].name
                var html = converter.makeHtml(data[0].content)
                html.replace(/"/g, '\'')
                content.context = html
            } else {
                content.name = 'query params are invalid'
                content.context = ''
            }
            context.commit('refreshAnalysisContent', content)
        })
    },
    enter (context) {
        context.commit('enter')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
