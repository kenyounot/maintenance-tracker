class Api::V1::VehiclesController < ApplicationController
    def index
        vehicles = Vehicle.all

        render json: {
            data: [vehicles]
        }
    end
end