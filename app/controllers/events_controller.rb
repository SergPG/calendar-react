class EventsController < ApplicationController
  def index
    event = Event.all
    render status: :ok, json: { event: event }
  end
end
