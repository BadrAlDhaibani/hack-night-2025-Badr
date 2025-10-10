import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { fetchWeather } from './services/weatherService'
import { getOutfitRecommendation } from './services/aiService'
import type { WeatherData, OutfitRecommendation } from './types'
import { LoadingScreen } from './components/loadingScreen/LoadingScreen'
import { ErrorScreen } from './components/errorScreen/ErrorScreen'
import { WeatherDisplay } from './components/weatherDisplay/WeatherDisplay'

const AppContainer = styled.div<{ $backgroundColor: string }>`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
  background-color: ${props => props.$backgroundColor};
  font-family: 'Inria Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  overflow: hidden;
`;

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [outfit, setOutfit] = useState<OutfitRecommendation | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const getBackgroundColor = (weather: WeatherData | null) => {
    if (!weather) return '#1a1a1a'

    const condition = weather.condition.toLowerCase()
    const isNight = !weather.isDay

    if (isNight) {
      // Night time backgrounds
      if (condition.includes('clear')) return '#1a1a2e'
      if (condition.includes('cloud')) return '#2d3748'
      if (condition.includes('rain') || condition.includes('drizzle')) return '#1e3a5f'
      if (condition.includes('snow')) return '#2c3e50'
      if (condition.includes('thunder') || condition.includes('storm')) return '#1a202c'
      if (condition.includes('mist') || condition.includes('fog')) return '#374151'
      return '#1a1a2e'
    } else {
      // Day time backgrounds
      if (condition.includes('clear') || condition.includes('sunny')) return '#4299e1'
      if (condition.includes('partly cloudy')) return '#5fa8d3'
      if (condition.includes('cloud') || condition.includes('overcast')) return '#718096'
      if (condition.includes('rain') || condition.includes('drizzle')) return '#4a5568'
      if (condition.includes('snow')) return '#cbd5e0'
      if (condition.includes('thunder') || condition.includes('storm')) return '#2d3748'
      if (condition.includes('mist') || condition.includes('fog')) return '#a0aec0'
      return '#4299e1'
    }
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const weatherData = await fetchWeather()
        setWeather(weatherData)

        const outfitData = await getOutfitRecommendation(weatherData)
        setOutfit(outfitData)

        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    loadData()

    // Refresh every 30 minutes
    const interval = setInterval(loadData, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const backgroundColor = getBackgroundColor(weather)

  return (
    <AppContainer $backgroundColor={backgroundColor}>
      {loading && <LoadingScreen />}
      {error && <ErrorScreen message={error} />}
      {!loading && !error && weather && outfit && (
        <WeatherDisplay weather={weather} outfit={outfit} />
      )}
    </AppContainer>
  )
}

export default App
