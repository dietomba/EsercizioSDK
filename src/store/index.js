import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MSDK: CY,
    PromiseSDK: null,
    sdkEnabled: null,
    emotion: {
      Angry: 0,
      Disgust: 0,
      Fear: 0,
      Happy: 0,
      Sad: 0,
      Surprise: 0,
      Neutral: 0,
    }
  },
  getters: {
    getEmotion(state){
      let emotionObj = {}
      if(!state.sdkEnabled) return {}
      emotionObj.Angry = state.emotion.Angry * 100
      emotionObj.Disgust = state.emotion.Disgust * 100
      emotionObj.Fear = state.emotion.Fear * 100
      emotionObj.Happy = state.emotion.Happy * 100
      emotionObj.Sad = state.emotion.Sad * 100
      emotionObj.Surprise = state.emotion.Surprise * 100
      emotionObj.Neutral = state.emotion.Neutral * 100
      return emotionObj
    }
  },
  mutations: {
    loadModule(state, moduleName) {
      state.PromiseSDK = state.MSDK.loader()
      .addModule(CY.modules()[moduleName].name, {}).load()

      state.sdkEnabled = true
    },
    updatePromiseSDK(state, newPromises){
      state.PromiseSDK = newPromises
    },
    switchState(state){
      
      state.PromiseSDK.then(({start,stop}) => {
        state.sdkEnabled ? stop() : start()
      });
      state.sdkEnabled = !state.sdkEnabled
    },
    updateEmotion(state, emotionObj){
      Object.assign(state.emotion, emotionObj);
    }
  },
  actions: {
    loadModules(context,moduleName) {
      context.commit('loadModule', moduleName)
    },
    updateEmotion(context,evt){
      context.commit('updateEmotion',evt.detail.output.emotion)
    }
  },
  modules: {
  }
})
