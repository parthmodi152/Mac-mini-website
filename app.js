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



let t1 = gsap.timeline()

t1
    .fromTo(
        '.heroDarkBg',{
            autoAlpha: 0
        },{
            autoAlpha: 1,
            duration: 2
        }
    )
    .fromTo(
        '.light-glow',{
            autoAlpha: 0
        },{
            autoAlpha:1,
            duration: 1
        },
        "turnOn"
    )
    .fromTo(
        '.heroLightBg',{
            autoAlpha: 0
        },{
            autoAlpha: 1,
            duration: 4,
            delay: 0.5
        },
        "turnOn"
    )
    .fromTo(
        '.heroMenuBg',{
            autoAlpha: 0
        },{
            autoAlpha: 1,
            delay: 1,
            duration: 2
        },
        "turnOn"
    )
    .fromTo(
        ['.section-title','.section-text'],{
            autoAlpha: 0
        },{
            autoAlpha: 1,
            duration: 1.5,
            delay: 0.5
        },
        "turnOn"
    )
