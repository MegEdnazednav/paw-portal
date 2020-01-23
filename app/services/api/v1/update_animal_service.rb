module Api
  module V1
    class UpdateAnimalService
      def initialize(animal, params)
        @animal = animal
        @params = params
      end

      def call
        byebug
        if params[:primary_image] && !file?(params[:primary_image])
          delete_image if animal.primary_image.attached?
          params.delete(:primary_image)
        end
        animal.update(@params)
      end

      private

      attr_accessor :animal, :params

      def file?(param)
        param.is_a?(ActionDispatch::Http::UploadedFile)
      end

      def delete_image
        animal.primary_image.purge
      end
    end
  end
end
