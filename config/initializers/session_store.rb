Rails.application.config.session_store :redis_store,
                           servers: ["redis://localhost:6379/0/session"],
                           expire_after: 90.minutes,
                           key: "_calendar_react_session"
                                       # threadsafe: false ,
                                       # secure: true



# Rails.application.config.session_store :redis_store,
#                                        servers: ['redis://localhost:6379/5/session'],
#                                        expire_after: 90.minutes,
#                                        key: '_calendar_react'


#redis
# REDIS_HOST: 'localhost'
# REDIS_PORT: '6379'
# REDIS_TIMEOUT: '5'

#$redis = Redis.new(host: ENV['REDIS_HOST'], port: ENV['REDIS_PORT'])

# Be sure to restart your server when you modify this file.

# Rails.application.config.session_store :cookie_store, key: '_productz_session'
