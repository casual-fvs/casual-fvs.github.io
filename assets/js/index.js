window.HELP_IMPROVE_VIDEOJS = false;
function reload() {
    var videos = document.getElementsByClassName('item');
    for(var i = 0; i < videos.length; i++) {
        // videos[i].style.width = width;
    }
}

function configure_carousel() {
    var options = {
            slidesToScroll: 1,
            slidesToShow: 4,
            loop: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 3000,
    }
    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
    
    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
        // Add listener to  event
        // carousels[i].reset();
        carousels[i].on('before:show', state => {
            console.log(state);
        });
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#item');
    if (element && element.bulmaCarousel) {
        // bulmaCarousel instance is available as element.bulmaCarousel
        element.bulmaCarousel.on('before-show', function(state) {
            console.log(state);
        });
    }
    
    bulmaSlider.attach();
    reload();
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    configure_carousel();

})

function click_button(button_family_name, clicked_button) {
    btns = document.getElementsByClassName(button_family_name);
    for(var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }
    clicked_button.classList.add('active');
}

function change_4dgs_comparison(ele, case_name) {
    click_button('btn-4dgs', ele);
    console.log(case_name);
    var video = document.getElementById('video_comparison_with_4dgs');
    var source = document.getElementById('source_comparison_with_4dgs');
    video.pause()
    source.setAttribute('src', 
                        './assets/videos/comparisons/4dgs/' + case_name + '.mp4')
    video.load();
    video.play();
}

function change_depth_warp_comparison(ele, case_name) {
    click_button('btn-depth-warp', ele);
    console.log(case_name);
    var video = document.getElementById('video_comparison_with_depth_warp');
    var source = document.getElementById('source_comparison_with_depth_warp');
    video.pause()
    source.setAttribute('src', 
                        './assets/videos/comparisons/depth_warp/' + case_name + '.mp4')
    video.load();
    video.play();
}

function change_ablation(ele, case_name) {
    click_button('btn-ablation', ele);
    console.log(case_name);
    var video = document.getElementById('video_ablation');
    var source = document.getElementById('source_ablation');
    video.pause()
    source.setAttribute('src', 
                        './assets/videos/comparisons/ablation/' + case_name + '.mp4')
    video.load();
    video.play();

    
    var label1 = document.getElementById('label-abla');
    var label2 = document.getElementById('label-full');
    var desc = document.getElementById('ablation_desc');
    if(case_name == 'wo_displacement') {
        label1.innerHTML = "without view-dependent displacement";
        label2.innerHTML = "with view-dependent displacement";
        desc.innerHTML = "The result without view-dependent displacement (left) may yield floaters or blurriness.";
    } else {
        label1.innerHTML = "without neighbor blending";
        label2.innerHTML = "with neighbor blending";
        desc.innerHTML = "The result without neighbor blending (left) may introduce temporal flickering in dynamic regions.";
    }
}

function change_failure(ele, case_name) {
    click_button('btn-failure', ele);
    console.log(case_name);
    var block2 = document.getElementById('failure_1x2');
    var block3 = document.getElementById('failure_1x3');
    if(case_name == 'backpack') {
        block2.style.display = 'none';
        block3.style.display = 'block';
    } else {
        block3.style.display = 'none';
        block2.style.display = 'block';
        var video = document.getElementById('video_failure');
        var source = document.getElementById('source_failure');
        video.pause()
        source.setAttribute('src', 
                            './assets/videos/comparisons/failure/' + case_name + '.mp4')
        video.load();
        video.play();

        
        var label1 = document.getElementById('label-input');
        var label2 = document.getElementById('label-output');
        var desc = document.getElementById('failure_desc');
        if(case_name == 'climbing_stairs') {
            label1.innerHTML = "Input frame";
            // label2.innerHTML = "Novel view synthesis";
            desc.innerHTML = "Unseen areas from the input frame may be revealed in novel views by our per-frame dynamic scene representation.";
        } else {
            label1.innerHTML = "Input video";
            // label2.innerHTML = "with neighbor blending";
            desc.innerHTML = "The result without neighbor blending (left) may introduce temporal flickering in dynamic regions.";
        }
    }
}

function change_realtime_demo(ele, case_name) {
    click_button('btn-interactive', ele);
    console.log(case_name);
    var video = document.getElementById('video_realtime_demo');
    var source = document.getElementById('source_realtime_demo');
    video.pause()
    source.setAttribute('src', 
                        './assets/videos/real-time-demo/' + case_name + '.mp4')
    video.load();
    video.play();
}

function change_stereo(ele, case_name) {
    click_button('btn-interactive', ele);
    console.log(case_name);
    var video = document.getElementById('video_stereo_demo');
    var source = document.getElementById('source_stereo_demo');
    video.pause()
    source.setAttribute('src', 
                        './assets/videos/stereo/' + case_name + '.mp4')
    video.load();
    video.play();
}

var nerf_method = 'dynibar';
var nerf_video = 'car-turn';
function change_nerf_method(ele, method_name) {
    click_button('btn-nerf-method', ele);
    nerf_method = method_name;

    if(method_name == 'dynibar') {
        document.getElementById('nerf_camel').style.display = 'inline-flex';
        document.getElementById('nerf_kid').style.display = 'inline-flex';
        document.getElementById('nerf_label').innerHTML = '<b>DynIBaR</b>';
        document.getElementById('nerf_desc').innerHTML = '*For a fair comparison, we use our video depth and pose preprocessing for both methods <br> and use the rendering path provided by <a href="https://github.com/google/dynibar#to-render-the-model">DynIBaR\' offical codes</a>.';
    } else {
        document.getElementById('nerf_camel').style.display = 'none';
        document.getElementById('nerf_kid').style.display = 'none';
        document.getElementById('nerf_label').innerHTML = '<b>RoDynRF</b>';
        document.getElementById('nerf_desc').innerHTML = '*For a fair comparison, we use our video depth and pose preprocessing for both methods.<br> We train RoDynRF with known camera poses and render the dolly-zoom effect provided by <a href="https://github.com/facebookresearch/robust-dynrf#rendering">RoDynRF\'s official codes</a>.';
        if (nerf_video == 'camel' || nerf_video == 'kid-running') {
            nerf_video = 'car-turn';
        }
    }

    change_nerf_comparison(0, nerf_video);

}



function change_nerf_comparison(ele, case_name) {
    if(ele == 0) {
        var btns = document.getElementsByClassName('btn-nerf');
        for(var i = 0; i < btns.length; i++) {
            if(btns[i].innerHTML.includes(case_name)) {
                ele = btns[i];
                break;
            }
        }
    }
    click_button('btn-nerf', ele);

    nerf_video = case_name;
    var video = document.getElementById('video_comparison_with_nerf');
    var source = document.getElementById('source_comparison_with_nerf');
    video.pause()
    source.setAttribute('src', 
                        './assets/videos/comparisons/' + nerf_method + '/' + case_name + '.mp4')
    video.load();
    video.play();
}