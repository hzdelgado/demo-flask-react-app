
from flask_restful import Resource

class ApiHandler(Resource):
  def get(self):
    return {
      'resultStatus': 'SUCCESS',
      'message': "Successful call"
      }