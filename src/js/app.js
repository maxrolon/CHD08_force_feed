var w = window;
var FF = w.FF = {};

FF.debug = false;
FF.useMock = false;

FF.mockData = {
	tnum: 1,
	url: "http://www.huffingtonpost.com/2015/05/13/amtrak-crash-speed-limit_n_7276902.html"
}

FF.mockResponse = {
    "template": 1,
    "content": [
        {
            "type": "image",
            "content": "http://media.glassdoor.com/l/b0/13/5b/19/corporate-conference-room.jpg"
        },
        {
            "type": "image",
            "content": "http://www.vosizneias.com/wp-content/uploads/2010/03/6.JPG"
        },
        {
            "type": "image",
            "content": "http://rlv.zcache.com/nasa_mars_rave_vallis_poster-rbe27566bffaf49e3a6544cdb2789eccd_w2u_8byvr_324.jpg"
        },
        {
            "type": "image",
            "content": "http://www2.pictures.zimbio.com/gi/Record%252BHeat%252BWave%252BExacerbates%252BDevastating%252BDrought%252BWVjNzNteiS4l.jpg"
        },
        {
            "type": "image",
            "content": "http://rlv.zcache.com/nasa_mars_rave_vallis_poster-rbe27566bffaf49e3a6544cdb2789eccd_w2u_8byvr_324.jpg"
        },
        {
            "type": "image",
            "content": "http://mnbrighterideas.com/skin/images/heatPump/ASHP_ani_cool.gif"
        },
        {
            "type": "image",
            "content": "http://mnbrighterideas.com/skin/images/heatPump/ASHP_ani_cool.gif"
        },
        {
            "type": "image",
            "content": "http://www.fullfleet.com/fullpages/nestlewatersmap.gif"
        },
        {
            "type": "image",
            "content": "https://d15mj6e6qmt1na.cloudfront.net/i/8331223/600.jpg"
        },
        {
            "type": "image",
            "content": "http://www.fullfleet.com/fullpages/nestlewatersmap.gif"
        },
        {
            "type": "image",
            "content": "http://www.hydrology.nl/images/docs/iah/cartoons/07_gw_buffer.jpg"
        },
        {
            "type": "image",
            "content": "http://www.vosizneias.com/wp-content/uploads/2010/03/6.JPG"
        },
        {
            "type": "image",
            "content": "https://www.insideindianabusiness.com/images/news/scenes/NestlePureLifeWater.jpg"
        },
        {
            "type": "image",
            "content": "http://media.glassdoor.com/l/b0/13/5b/19/corporate-conference-room.jpg"
        },
        {
            "type": "image",
            "content": "http://www.fullfleet.com/fullpages/nestlewatersmap.gif"
        },
        {
            "type": "image",
            "content": "http://www2.pictures.zimbio.com/gi/Record%252BHeat%252BWave%252BExacerbates%252BDevastating%252BDrought%252BWVjNzNteiS4l.jpg"
        },
        {
            "type": "image",
            "content": "http://www.nationsencyclopedia.com/photos/united-states-population-1515.jpg"
        },
        {
            "type": "image",
            "content": "http://img1.wikia.nocookie.net/__cb20070430025357/wikiality/images/1/15/North-america-map.jpg"
        },
        {
            "type": "image",
            "content": "http://img1.wikia.nocookie.net/__cb20070430025357/wikiality/images/1/15/North-america-map.jpg"
        },
        {
            "type": "image",
            "content": "http://img1.wikia.nocookie.net/__cb20070430025357/wikiality/images/1/15/North-america-map.jpg"
        },
        {
            "type": "image",
            "content": "http://purewatergazette.net/blog/wp-content/uploads/2013/04/ng-artn-water-20130415180116860733-300x01.jpg"
        },
        {
            "type": "image",
            "content": "http://media.mercola.com/imageserver/public/2010/October/bottled-water-10.1.jpg"
        },
        {
            "type": "image",
            "content": "http://images.placesonline.com/photos/14607_san_joaquin_valley_irrigation_of_new_crop.jpg"
        },
        {
            "type": "image",
            "content": "http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Municipios_de_Baja_California.svg/2000px-Municipios_de_Baja_California.svg.png"
        },
        {
            "type": "image",
            "content": "http://images.placesonline.com/photos/14607_san_joaquin_valley_irrigation_of_new_crop.jpg"
        },
        {
            "type": "image",
            "content": "http://upload.wikimedia.org/wikipedia/commons/0/0a/Wastewater_effluent.JPG"
        },
        {
            "type": "image",
            "content": "http://media.mercola.com/imageserver/public/2010/October/bottled-water-10.1.jpg"
        },
        {
            "type": "image",
            "content": "http://media.utsandiego.com/img/photos/2014/09/02/farmers_market4_r620x349.jpg?75d51d0aea2efce5189afce216053cbc530c46a8"
        },
        {
            "type": "image",
            "content": "http://www.kiddglobal.com/library/public/designs/default/logo.png"
        },
        {
            "type": "image",
            "content": "http://d3vs4613l1445x.cloudfront.net/archive/x634491106/g320258000000000000631582c48f3bb6a29136c72a00953af4154eae4b.jpg"
        },
        {
            "type": "image",
            "content": "http://i.telegraph.co.uk/multimedia/archive/02166/hodge_2166914b.jpg"
        },
        {
            "type": "image",
            "content": "http://7art-screensavers.com/wallpapers/mist-0/xls/magic-fog.jpg"
        },
        {
            "type": "image",
            "content": "http://7art-screensavers.com/wallpapers/mist-0/xls/magic-fog.jpg"
        },
        {
            "type": "image",
            "content": "http://7art-screensavers.com/wallpapers/mist-0/xls/magic-fog.jpg"
        },
        {
            "type": "image",
            "content": "http://www.liquid-blue.com/photos/tour%25255Cstates/california/images/2009-04-24%20Sacramento-CA%20033.jpg"
        },
        {
            "type": "image",
            "content": "http://bonnieplants.com/wp-content/uploads/2011/10/chive-plant-clump-lo.jpg"
        },
        {
            "type": "image",
            "content": "http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Municipios_de_Baja_California.svg/2000px-Municipios_de_Baja_California.svg.png"
        },
        {
            "type": "image",
            "content": "http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Municipios_de_Baja_California.svg/2000px-Municipios_de_Baja_California.svg.png"
        },
        {
            "type": "image",
            "content": "http://7art-screensavers.com/wallpapers/mist-0/xls/magic-fog.jpg"
        },
        {
            "type": "image",
            "content": "http://www.harborfreight.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_22416.jpg"
        },
        {
            "type": "image",
            "content": "http://www.50states.com/maps/nevada.gif"
        },
        {
            "type": "image",
            "content": "http://community.abeo.us/wp-content/uploads/2012/12/cat-lion-mirror.jpg"
        },
        {
            "type": "image",
            "content": "http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Municipios_de_Baja_California.svg/2000px-Municipios_de_Baja_California.svg.png"
        },
        {
            "type": "image",
            "content": "http://www.climatechange-foodsecurity.org/uploads/2015_Unprec_drough_US_SW_3_2c.png"
        },
        {
            "type": "image",
            "content": "http://bondstreetdental.com.au/wp-content/uploads/2014/07/Oral-Hygiene.png"
        },
        {
            "type": "image",
            "content": "http://cdn.shopify.com/s/files/1/0307/7709/files/ethos_large.jpg?16836065973081958828"
        },
        {
            "type": "image",
            "content": "http://1-ps.googleusercontent.com/xk/UMQ08tvUJOp9Tfl0X2d14MHAmB/www.turtlediary.com/cdn.turtlediary.com/games/span/xgrade2-personal-hygiene.png.pagespeed.ic.KGcj-bgNQa_V5U26Fs_M.jpg"
        },
        {
            "type": "image",
            "content": "http://www.wholesalevapor.com/images/ethos-vape-juice.jpg"
        },
        {
            "type": "image",
            "content": "http://1-ps.googleusercontent.com/xk/UMQ08tvUJOp9Tfl0X2d14MHAmB/www.turtlediary.com/cdn.turtlediary.com/games/span/xgrade2-personal-hygiene.png.pagespeed.ic.KGcj-bgNQa_V5U26Fs_M.jpg"
        },
        {
            "type": "image",
            "content": "http://www.wholesalevapor.com/images/ethos-vape-juice.jpg"
        },
        {
            "type": "image",
            "content": "http://community.abeo.us/wp-content/uploads/2012/12/cat-lion-mirror.jpg"
        },
        {
            "type": "image",
            "content": "http://www.50states.com/maps/nevada.gif"
        },
        {
            "type": "image",
            "content": "http://www.blog.farmusa.org/wp-content/uploads/2012/08/cowdrought_480x286.jpg"
        },
        {
            "type": "image",
            "content": "http://www.cdc.gov/niosh/topics/body_art/images/states.gif"
        },
        {
            "type": "image",
            "content": "http://www.momendeavors.com/wp-content/uploads/2012/06/Arizona-Sunset.jpg"
        },
        {
            "type": "image",
            "content": "https://www.wctc.edu/images/programs/dental-hygienist.png"
        },
        {
            "type": "image",
            "content": "http://www.tufts.edu/home/feature/greenblatt/greenblatt_long1.jpg"
        },
        {
            "type": "image",
            "content": "http://www.zerohedge.com/sites/default/files/images/user92183/imageroot/2015/04/Drought4_0.jpg"
        },
        {
            "type": "image",
            "content": "http://publicradio1.wpengine.netdna-cdn.com/updraft/files/2013/09/551-mn-drought.png"
        },
        {
            "type": "image",
            "content": "http://www.strategyand.pwc.com/media/image/teaser_Global-Talent-Innovation-Strategies-for-Breakthrough-Performance290x140.jpg"
        },
        {
            "type": "image",
            "content": "http://api.ning.com/files/gbgPQMVtmra5LvsNEQy4Qz-T-BWCsZ7zIXov-pS*RYIu7e7bKIEml88tPvjGxb02gm4jObdslt5V*U-ch50XpRhZuVKG3DqI/1350022429headercustomers.jpg"
        },
        {
            "type": "image",
            "content": "http://www.netstate.com/states/maps/images/usa_electoral_votes04-08.gif"
        },
        {
            "type": "image",
            "content": "https://i-msdn.sec.s-msft.com/dynimg/IC498980.png"
        },
        {
            "type": "image",
            "content": "http://1.bp.blogspot.com/-fgmgUGJImNI/TzF9XDPCFNI/AAAAAAAAACQ/xVmaGurtrEs/s320/One-of-the-best-ways-to-grow-a-local-business-is-to-hire-a-local-lead-generation-company-to-help-with-your-marketing-efforts..jpg"
        },
        {
            "type": "image",
            "content": "http://arts.wp.htcreative.com/files/2013/11/LongtimeCompanion2.jpg"
        },
        {
            "type": "image",
            "content": "http://i.kinja-img.com/gawker-media/image/upload/s--nU3RARXf--/c_fit,fl_progressive,q_80,w_636/18q0uzw6n6333jpg.jpg"
        },
        {
            "type": "image",
            "content": "http://d.ibtimes.co.uk/en/full/1406632/sao-paulo-drought.jpg"
        },
        {
            "type": "image",
            "content": "http://www.inhabitat.com/wp-content/uploads/guyrecycledbottles.jpg"
        },
        {
            "type": "image",
            "content": "http://www.brocktonpublicschools.com/uploaded/ClipArt_Pictures/sun.jpg"
        }
    ]
}

FF.spareImages = [
	"http://media.glassdoor.com/l/b0/13/5b/19/corporate-conference-room.jpg",
	"http://www.vosizneias.com/wp-content/uploads/2010/03/6.JPG",
	"http://rlv.zcache.com/nasa_mars_rave_vallis_poster-rbe27566bffaf49e3a6544cdb2789eccd_w2u_8byvr_324.jpg",
	"http://www2.pictures.zimbio.com/gi/Record%252BHeat%252BWave%252BExacerbates%252BDevastating%252BDrought%252BWVjNzNteiS4l.jpg",
	"http://rlv.zcache.com/nasa_mars_rave_vallis_poster-rbe27566bffaf49e3a6544cdb2789eccd_w2u_8byvr_324.jpg",
	"http://mnbrighterideas.com/skin/images/heatPump/ASHP_ani_cool.gif",
	"http://www.fullfleet.com/fullpages/nestlewatersmap.gif",
	"https://d15mj6e6qmt1na.cloudfront.net/i/8331223/600.jpg",
	"http://www.fullfleet.com/fullpages/nestlewatersmap.gif",
	"http://www.hydrology.nl/images/docs/iah/cartoons/07_gw_buffer.jpg",
	"http://www.vosizneias.com/wp-content/uploads/2010/03/6.JPG",
	"https://www.insideindianabusiness.com/images/news/scenes/NestlePureLifeWater.jpg",
	"http://media.glassdoor.com/l/b0/13/5b/19/corporate-conference-room.jpg"
]


$(function(){
	require('./util');
	require('./outer-context');
	require('./ui');
	require('./article');
	require('./form');
});
