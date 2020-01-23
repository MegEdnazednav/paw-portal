module Api
  module V1
    class AnimalsController < ApplicationController

      before_action :set_animal, only: [:show, :update, :destroy]
      def index
        animals = Animal.all.with_attached_primary_image
        render json: animals
      end

      def show
        render json: @animal
      end

      def create
        byebug
        @animal = Animal.create(animal_params)
        ::Api::V1::UpdateAnimalService.new(@animal, image_params).call
        render json: @animal
      end

      def update
        if ::Api::V1::UpdateAnimalService.new(@animal, animal_params).call
          render json: @animal
        else
          render json: @animal.errors, status: :unprocessable_entity
        end

      end

      def destroy
        @animal.destroy
        render json: {}, status: :ok
      end

      private

      def set_animal
        @animal = Animal.find(params[:id])
      end

      def animal_params
        params.require(:animal).permit(:id, :name, :age, :kind, :description)
      end

      def image_params
        params.permit(primary_image: {})
      end
    end
  end
end
