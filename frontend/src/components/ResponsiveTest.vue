<!-- <template>
  <div id="Page">
        <Leaflet/>
        <CloudFare/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css">
        <div id="app" class="container">
          <div class="row">
            <div class="col-md-9">
              <div id="map" class="map"></div>
            </div>
            <div class="col-md-3">
              <div
                  class="form-check"
                  v-for="layer in layers"
                  :key="layer.id"
                >
                <label class="form-check-label">
             <input
               class="form-check-input"
               type="checkbox"
               v-model="layer.active"
               @change="layerChanged(layer.id, layer.active)"
             />
             {{ layer.name }}
           </label>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: null,
      tileLayer: null,
      layers: [
        {
          id: 0,
          name: 'University',
          active: false,
          features: [
            {
              id: 0,
              name: 'Eindhoven University of Technology',
              type: 'marker',
              coords: [51.4486602, 5.490339957]
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.initMap()
    this.initLayers()
  },
  methods: {
    layerChanged (layerId, active) {
      const layer = this.layers.find(layer => layer.id === layerId)

      layer.features.forEach((feature) => {
        if (active) {
          feature.leafletObject.addTo(this.map)
        } else {
          feature.leafletObject.removeFrom(this.map)
        }
      })
    },
    initLayers () {
      this.layers.forEach((layer) => {
        const markerFeatures = layer.features.filter(feature => feature.type === 'marker')
        const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon')

        markerFeatures.forEach((feature) => {
          feature.leafletObject = L.marker(feature.coords)
            .bindPopup(feature.name)
        })

        polygonFeatures.forEach((feature) => {
          feature.leafletObject = L.polygon(feature.coords)
            .bindPopup(feature.name)
        })
      })
    },
    initMap () {
      this.map = L.map('map').setView([51, 5], 8)
      this.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      )
      this.tileLayer.addTo(this.map)
    }
  }
}
</script>

<style>
.map { height: 800px; width: 3000px; position: relative; right: 400px; }
</style> -->
