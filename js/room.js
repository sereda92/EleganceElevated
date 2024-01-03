
const roomCont = document.getElementById('room-cont')
const roomRegBtn = document.getElementById('room-reg-btn')
const roomRegBlock = document.getElementById('room-reg-block')
const roomForm = document.getElementById('room-form')
const roomInBtn = document.getElementById('room-in-btn')
const roomRegisterMain = document.getElementById('room-registr')
const roomInMain = document.getElementById('room-in')
const roomFormIn = document.getElementById('room-form-in')
const roomFormReg = document.getElementById('room-form-reg')
const closeRoomBtn = document.getElementById('close-room')
// const room = document.getElementById('room')
const room = document.getElementById('room')
const roomBtn = document.getElementById('room-btn')
const wrapper = document.getElementById('wrapper')

closeRoomBtn.addEventListener('click', function () {
    room.classList.remove('room-active')
    wrapper.classList.remove('wrapper-blur')
})

roomRegBtn.addEventListener('click', function(){
    roomCont.classList.add('room-container-rev')
    roomRegBlock.classList.add('room-reg-block_activ')
    // roomRegBtn.classList.add('not-visible')
    roomRegisterMain.classList.add('not-visible')
    roomInMain.classList.remove('not-visible')
    roomForm.classList.add('room-form_active')
    roomFormIn.classList.add('not-visible')
    roomFormReg.classList.remove('not-visible')
    closeRoomBtn.classList.add('close-room-active')
})

roomInBtn.addEventListener('click', function(){
    roomCont.classList.remove('room-container-rev')
    roomRegBlock.classList.remove('room-reg-block_activ')
    roomForm.classList.remove('room-form_active')
    roomRegisterMain.classList.remove('not-visible')
    roomInMain.classList.add('not-visible')
    roomFormIn.classList.remove('not-visible')
    roomFormReg.classList.add('not-visible')
    closeRoomBtn.classList.remove('close-room-active')
})




roomBtn.addEventListener('click', function () {
    room.classList.add('room-active')
    wrapper.classList.add('wrapper-blur')
})