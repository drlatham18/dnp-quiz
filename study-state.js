/* Local learning history. Accuracy is practice feedback, never clinical competency. */
(function(root) {
  'use strict';
  var KEY='nursing-study-v2';
  function read(storage) {
    try { var data=JSON.parse(storage.getItem(KEY)||'{}'); return data && data.version===2 && data.items && typeof data.items==='object' && !Array.isArray(data.items) ? data : {version:2,items:{}}; }
    catch (_) { return {version:2,items:{}}; }
  }
  function record(state,id,correct,now) {
    var old=state.items[id]||{}, streak=correct ? Math.min((Number(old.streak)||0)+1,4) : 0;
    var delay=correct ? [1,3,7,14][streak-1]*86400000 : 600000;
    state.items[id]={attempts:(Number(old.attempts)||0)+1,correct:(Number(old.correct)||0)+(correct?1:0),streak:streak,lastCorrect:!!correct,lastSeen:now,due:now+delay};
    return state;
  }
  function due(state,ids,now) { return ids.filter(function(id) { var r=state.items[id];return r && Number.isFinite(r.due) && r.due<=now; }); }
  function stats(state,ids) {
    var seen=ids.filter(function(id){return state.items[id];});
    return {total:ids.length,seen:seen.length,correct:seen.filter(function(id){return state.items[id].lastCorrect;}).length};
  }
  var api={key:KEY,read:read,record:record,due:due,stats:stats};
  if(typeof module==='object' && module.exports) module.exports=api; else root.NursingStudyState=api;
})(typeof window==='object'?window:globalThis);
