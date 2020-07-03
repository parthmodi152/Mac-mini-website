let box_text_padding = document.getElementById('boxText').style.paddingBottom
console.log('padding is: '+box_text_padding)

gsap.to(
    '.airpodsNav', {
        backdropFilter: "saturate(180%) blur(20px)",
        borderBottom: '1px solid #2c2c2c',
        scrollTrigger: {
            trigger: '.airpodsNav',
            start: 'top top',
            scrtub:true,
            toggleActions: 'play pause reverse reset'
        }
    }
)
let logicBox_inView = false
function toggle_anim () {
    logicBox_inView = true
}
gsap.to(
    '.row-2',{
        scrollTrigger: {
            trigger: '.row-1',
            start: 'top 90%',
            endTrigger: '.row-2',
            end: '100% 100%'
        },
        onComplete: toggle_anim()
    }
)

var mql = window.matchMedia('(max-width: 730px)');

if (mql.matches || logicBox_inView) {
    let t1 = gsap.timeline()

    t1
        .fromTo(
            '.heroDarkBg',{
                opacity: 0
            },{
                opacity: 1,
                duration: 2
            }
        )
        .fromTo(
            '.light-glow',{
                opacity: 0
            },{
                opacity:1,
                duration: 1
            },
            "turnOn"
        )
        .fromTo(
            '.heroLightBg',{
                opacity: 0
            },{
                opacity: 1,
                duration: 4,
                delay: 0.5
            },
            "turnOn"
        )
        .fromTo(
            '.heroMenuBg',{
                opacity: 0
            },{
                opacity: 1,
                delay: 1,
                duration: 2
            },
            "turnOn"
        )
        .fromTo(
            ['.section-title','.section-text'],{
                opacity: 0
            },{
                opacity: 1,
                duration: 1.5,
                delay: 0.5
            },
            "turnOn"
        )
        .fromTo(
            '.box-border',{
                width: 0
            },{
                width: '100%',
                duration: 1.5,
                delay: 0.7,
                scrollTrigger: {
                    trigger: '.row-1',
                    start: 'top 90%'
                }
            },
            "turnOn"
        )
        .from(
            '.box-text > p', {
                opacity: 0,
                translateY: '40px',
                duration: 1.5,
                delay: 1.1,
                scrollTrigger: {
                    trigger: '.row-1',
                    start: 'top 90%',
                }
            },
            "turnOn"
        )
}

var mql = window.matchMedia('(min-width: 731px)');

if (mql.matches && !logicBox_inView) {
    let t1 = gsap.timeline()

    t1
        .fromTo(
            '.heroDarkBg',{
                opacity: 0
            },{
                opacity: 1,
                duration: 2
            }
        )
        .fromTo(
            '.light-glow',{
                opacity: 0
            },{
                opacity:1,
                duration: 1
            },
            "turnOn"
        )
        .fromTo(
            '.heroLightBg',{
                opacity: 0
            },{
                opacity: 1,
                duration: 4,
                delay: 0.5
            },
            "turnOn"
        )
        .fromTo(
            '.heroMenuBg',{
                opacity: 0
            },{
                opacity: 1,
                delay: 1,
                duration: 2
            },
            "turnOn"
        )
        .fromTo(
            ['.section-title','.section-text'],{
                opacity: 0
            },{
                opacity: 1,
                duration: 1.5,
                delay: 0.5
            },
            "turnOn"
        )

        gsap.fromTo(
            '.box-border',{
                width: 0
            },{
                width: '100%',
                duration: 1,
                scrollTrigger: {
                    trigger: '.row-1',
                    start: 'top 90%'
                }
            },
            "logicBox"
        )

        gsap.from(
            '.box-text > p', {
                opacity: 0,
                translateY: '50px',
                duration: 1.5,
                delay: 0.4,
                scrollTrigger: {
                    trigger: '.row-1',
                    start: 'top 90%'
                }
            },
            "logicBox"
        )
}
