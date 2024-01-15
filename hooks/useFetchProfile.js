import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { url } from '../store/actions/auth'
import { profileActions } from '../store/reducers/profile'
import useHttp from './useHttp'

const useFetchProfile = () => {
  const { isLoading, error, sendRequest, setError, errorType } = useHttp()
  const dispatch = useDispatch(null)
  const details = useSelector((state) => state.auth)
  const { profile } = useSelector((state) => state.profile)

  useEffect(() => {
    const saveProfile = (data) => {
      console.log('from useEffect', JSON.stringify(data))

      dispatch(profileActions.setProfile(data))
    }
    !profile &&
      sendRequest(
        {
          url: `${url}/artist/my/profile`,
          headers: { Authorization: `Bearer ${details.token}` },
        },
        saveProfile
      )
  }, [sendRequest])

  return {
    isLoading,
    error,
    sendRequest,
    setError,
    errorType,
  }
}

export default useFetchProfile
