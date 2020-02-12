class Api::V1::MaintenancesController < ApplicationController

  def create
    @maintenance = Maintenance.new(maintenance_params)

    if @maintenance.save
      render json: {
        maintenance: @maintenance
      }
    end
  end
  


  private

  def maintenance_params
    params.require(:maintenance).permit(:kind, :mileage, :parts, :description, :price, :vehicle_id)
  end


end